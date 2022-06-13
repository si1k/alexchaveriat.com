import sendgrid from '@sendgrid/mail'

type Inputs = {
  body: {
    name: string
    email: string
    subject: string
    message: string
  }
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req: Inputs, res: any) {
  try {
    await sendgrid.send({
      to: process.env.SENDGRID_TO, // Your email where you'll receive emails
      from: process.env.SENDGRID_FROM, // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      text: `You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email}.
      
Name:
${req.body.name}

Message:
${req.body.message}
      `
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
