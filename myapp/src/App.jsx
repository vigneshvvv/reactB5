import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './sampleComponent/Home'
import StateFile from './hooks/StateFile'
import UseEffectHook from './hooks/UseEffectHook'
import ContionalRendering from './hooks/ConditionalRendering'
import ComponentRouter from './router/ComponentRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>React app working</h1> */}
      {/* <Home/> */}
      {/* <StateFile/>
      <UseEffectHook/> */}
      {/* <ContionalRendering/> */}
      <ComponentRouter/>
    </>
  )
}
 

export default App
