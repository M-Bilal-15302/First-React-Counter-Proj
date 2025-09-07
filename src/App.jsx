import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
// useState (hook) used to change the state of variable in whole documnet
  let [counter , setcounter] = useState(1)


  // here setCounter from useState take a callback function and that callback have a perameter 
  //initially set to usestate value (useState(1)) 
  // its like Previous Counter and it help to store the Previous Value and used it to increase many time.
const addVal = ()=>{
  setcounter((preCounter)=>(preCounter+1))
  setcounter((preCounter)=>(preCounter+1))
  setcounter((preCounter)=>(preCounter+1))
}


const removeVal = ()=>{
  setcounter(counter-1)
}
const resetVal = ()=>{
  setcounter(counter = 0)
}

  return (
    <>
      <h1>BASIC COUNTER </h1>
      <h3>counter value is : {counter} </h3>
      <button onClick={addVal} id='add'
      >Add value</button>
      <button onClick={removeVal} id='remove'
      >Remove value</button> <br /><br />
      <button onClick={resetVal} id='reset'
      >Reset value to 0</button>
      
          </>
  )
}

export default App
