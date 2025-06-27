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
    <div className="numpad-root">
      <h2 className="numpad-title">Mobile Numpad</h2>
      <div className="numpad">
        {KEYS.map(({ label, key, className }) => (
          <button
            key={key + label}
            data-key={key}
            className={className}
            onClick={() => handleKeyClick(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div id="status">{status}</div>
    </div>
  )
}
