

import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
    else{
      setCounter(20);
    }
    
  }

  const removeValue = () => {
    if(counter > 0) setCounter(counter-1);
    else setCounter(0);
  }
  return (
    <>
     <h1>Practice with React+Vite</h1>
     <h2>counter : {counter}</h2>
     <button onClick={addValue}> Add value </button>
     <br />
     <br />
     <button onClick={removeValue}> Remove value </button>

    </>
  )
}

export default App
