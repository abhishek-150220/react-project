import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compenents/Card';
function App() {
  const [count, setCount] = useState(0)
let myArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black mb-4'>Tailwind test</h1>
      <Card username='abhishek' someObj={myArr} btnText="visit me"/>
      <Card username='abhinay' btnText="clicked"/>
    </>
  )
}

export default App
