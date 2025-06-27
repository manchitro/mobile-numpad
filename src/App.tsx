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
    <div className="container" style={{ background: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Use Your Phone as a Numpad</h1>
      <p>Scan this QR code with your phone to open the numpad:</p>
      {sessionUrl && (
        <div style={{ background: '#fff', borderRadius: 16, padding: 20, boxShadow: '0 2px 12px #0001', border: '1px solid #eee', display: 'inline-block' }}>
          <QRCodeSVG value={sessionUrl} size={256} />
        </div>
      )}
      <p style={{ marginTop: '1rem' }}>
        Session ID: <code>{sessionId}</code>
      </p>
      <p style={{ color: '#888', fontSize: '0.9rem' }}>
        Keep this page open on your desktop. Use your phone to scan the QR code and control the numpad remotely.
      </p>
    </div>
  )
}

export default App
