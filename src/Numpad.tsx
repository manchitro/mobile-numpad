import './Numpad.css'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const KEYS = [
  { label: 'Num Lock', key: 'num_lock' },
  { label: '/', key: '/' },
  { label: '*', key: '*' },
  { label: '-', key: '-' },
  { label: '7', key: '7' },
  { label: '8', key: '8' },
  { label: '9', key: '9' },
  { label: '+', key: '+', className: 'span-2-rows' },
  { label: '4', key: '4' },
  { label: '5', key: '5' },
  { label: '6', key: '6' },
  { label: '1', key: '1' },
  { label: '2', key: '2' },
  { label: '3', key: '3' },
  { label: 'Enter', key: 'enter', className: 'span-2-rows' },
  { label: '0', key: '0', className: 'span-2-cols' },
  { label: '.', key: '.' },
]

export default function Numpad() {
  const [searchParams] = useSearchParams()
  const session = searchParams.get('session')
  const [status, setStatus] = useState('Connecting...')

  useEffect(() => {
    // TODO: Connect to backend via WebSocket and update status
    setStatus('Connected (demo)')
  }, [session])

  function handleKeyClick(key: string) {
    // TODO: Send key to backend
    setStatus(`Pressed: ${key}`)
  }

  return (
    <div style={{
      fontFamily: 'sans-serif', margin: 10, padding: 0, background: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      <h2 style={{ marginBottom: 10 }}>Mobile Numpad</h2>
      <div className="numpad" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, width: '100%', maxWidth: 400, gridAutoFlow: 'dense'
      }}>
        {KEYS.map(({ label, key, className }) => (
          <button
            key={key + label}
            data-key={key}
            className={className}
            style={{
              fontSize: 24, padding: 15, border: 'none', borderRadius: 8, background: '#333', color: 'white', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)', cursor: 'pointer', gridColumn: className === 'span-2-cols' ? 'span 2' : undefined, gridRow: className === 'span-2-rows' ? 'span 2' : undefined
            }}
            onClick={() => handleKeyClick(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div id="status" style={{ marginTop: 15, fontSize: 14, color: '#666' }}>{status}</div>
    </div>
  )
}
