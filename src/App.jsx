
import { useState } from 'react'
import './App.css'

function App() {
  const [numdice,setNumdice]=useState(1)
  const [rolls,setRolls]=useState([])

  const predict=()=>{
    const newrolls=Array.from({length:numdice},()=>Math.floor(Math.random() *6)+1)
    setRolls(newrolls)
  }
 

  return (
    <>
   <div className='container'>
    <div className='card'>
      <h3>Roll Dice</h3>
      <input type='number' placeholder='enter' min='1' max='10' value={numdice} onChange={(e)=>setNumdice(Math.max(1, Math.min (10,Number(e.target.value))))}/>
      <button type='button' onClick={predict}>Click</button>
    </div>
    <div className='dice'>
      {rolls.map((Roll,index)=>
      (

         <span key={index}>{Roll}</span>
      ))}
     
    </div>
   </div>
    </>
  )
}

export default App
