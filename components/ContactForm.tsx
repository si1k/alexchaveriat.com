import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const [disabled, setDisabled] = useState(false)

  const toastifySuccess = () => {
    toast('Email sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    })
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, subject, message } = data
    try {
      setDisabled(true)

      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        return
      }

      reset()
      toastifySuccess()
      setDisabled(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='notion-row'>
      <div className='notion-column notion-collection-row-value'>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='notion-row'>
            <div className='notion-column'>
              <input
                type='text'
                name='name'
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Please enter your name or handle'
                  },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less'
                  }
                })}
                className='formInput'
                placeholder='Name or Handle'
              ></input>
              {errors.name && (
                <span className='errorMessage'>{errors.name.message}</span>
              )}
            </div>
            <div className='notion-column'>
              <input
                type='email'
                name='email'
                {...register('email', {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
                className='formInput'
                placeholder='Email address'
              ></input>
              {errors.email && (
                <span className='errorMessage'>
                  Please enter a valid email address
                </span>
              )}
            </div>
          </div>
          <div className='notion-column'>
            <input
              type='text'
              name='subject'
              {...register('subject', {
                required: {
                  value: true,
                  message: 'Please enter a subject'
                },
                maxLength: {
                  value: 75,
                  message: 'Subject cannot exceed 75 characters'
                }
              })}
              className='formInput'
              placeholder='Subject'
            ></input>
            {errors.subject && (
              <span className='errorMessage'>{errors.subject.message}</span>
            )}
          </div>
          <div className='notion-column'>
            <textarea
              rows={10}
              name='message'
              {...register('message', {
                required: true
              })}
              className='formInput'
              placeholder='Message'
            ></textarea>
            {errors.message && (
              <span className='errorMessage'>Please enter a message</span>
            )}
          </div>
          <button className='submit-btn' disabled={disabled} type='submit'>
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
