import Youtube from "./Youtube"
import { useState } from "react"
import './App.css'
function App() {
  const [counter, setCounter] = useState(15);

  function addValue()
  {
    setCounter(counter+1);
  }
  function decValue()
  {
    if(counter===0)
      return 0;
    setCounter(counter-1);
  }
return (
    <>
      <h1>hello {counter}</h1>
      <Youtube/>
      <h3>total view {counter}</h3>
      <button onClick={addValue}>inc</button> {" "}
      <button onClick={decValue}>dec</button>
      <p>number of likes {counter}</p>
    </>
  )
}

export default App
