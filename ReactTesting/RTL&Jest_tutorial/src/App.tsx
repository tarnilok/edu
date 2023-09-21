import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Application } from './components/application/application'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Application/>
    </div>
  )
}

export default App
