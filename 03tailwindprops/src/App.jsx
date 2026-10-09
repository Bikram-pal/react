import { useState } from 'react'

import './App.css'
import Card from './components/Card'

let newArr = [12,22,24,21];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold">
        <Card username="bikram" name={"huiii"} newArr = {newArr}/>
        <Card/>
        <Card/>
    Hello world!
  </h1>
    </>
  )
}

export default App
