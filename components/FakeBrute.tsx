import React, { useEffect, useState } from 'react'

export const FakeBrute = ({
  word,
  keySpace
}: {
  word: string
  keySpace?: string
}) => {
  //   const [output, setOutput] = useState('')
  const [found, setFound] = useState('')
  const [junk, setJunk] = useState('DKN334')

  useEffect(() => {
    const chars = keySpace ? keySpace : 'ABCDEFGHJKLMNOPQRSTUVWXYZ024679#%&'
    const toFind = word.length - found.length

    if (toFind !== 0) {
      const interval = setInterval(() => {
        let output = ''
        for (let i = 0; i < toFind; i++) {
          output += chars.charAt(Math.floor(Math.random() * chars.length))
          setJunk(output)
        }

        if (output.substr(0, 1) === word.substr(found.length, 1)) {
          setFound(found + output.substring(0, 1))
        }
      }, 100)
      return () => clearInterval(interval)
    } else {
      setJunk('')
    }
  }, [found, word, keySpace])

  return (
    <span>
      {found}
      {junk}
    </span>
  )
}
