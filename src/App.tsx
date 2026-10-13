
import { useState } from 'react'
import './App.css'

function App() {
  const [isPink, setIsPink] = useState(true)

  return (
    <div className={isPink ? 'page pink' : 'page dark'}>
      <div className="window">
        <h1>⋆˙⟡♡ Welcome to my portfolio ⋆˙⟡♡</h1>

        <p>
          Hi! I'm Tammy! I'm a CS student at the University of Maryland, College Park.
        </p>

        <p>
          I'm interested in software development and human-computer interaction.
        </p>

        <button onClick={() => setIsPink(!isPink)}>
          {isPink ? '🌙 Dark mode' : '🎀 Pink mode'}
        </button>

        <p>
          Current theme: {isPink ? 'Pink' : 'Dark'}
        </p>
      </div>
    </div>
  )
}

export default App
