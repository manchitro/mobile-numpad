import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import './App.css'

function generateSessionId() {
  return Math.random().toString(36).substr(2, 10)
}

function App() {
  const [sessionId, setSessionId] = useState('')
  const [sessionUrl, setSessionUrl] = useState('')

  useEffect(() => {
    const id = generateSessionId()
    setSessionId(id)
    setSessionUrl(`${window.location.origin}/numpad?session=${id}`)
  }, [])

  return (
    <div className="container">
      <h1>Use Your Phone as a Numpad</h1>
      <p>Scan this QR code with your phone to open the numpad:</p>
      {sessionUrl && (
        <div className="qr-wrapper">
          <QRCodeSVG value={sessionUrl} size={256} />
        </div>
      )}
      <p className="session-id">
        Session ID: <code>{sessionId}</code>
      </p>
      <p className="instructions">
        Keep this page open on your desktop. Use your phone to scan the QR code and control the numpad remotely.
      </p>
    </div>
  )
}

export default App
