import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black text-3xl p-3 rounded-3xl'>Tailwind test</h1>

      <Card username='Chai aur Code' btnText='click me'/>
      <Card username='Nil' btnText='visit me' />

    </>
  )
}

export default App
