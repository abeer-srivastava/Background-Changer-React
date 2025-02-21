import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
  <div className='w-full h-screen flex flex-col  '
  style={{backgroundColor:color}}
  >
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button 
      onClick={()=>setColor("red")}
      className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
      style={{backgroundColor:"red"}}
      >Red</button>
            <button 
      onClick={()=>setColor("blue")}
      className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
      style={{backgroundColor:"blue"}}
      >Blue</button>      <button 
      onClick={()=>setColor("olive")}
      className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
      style={{backgroundColor:"olive"}}
      >olive</button>     
     <button 
      onClick={()=>setColor("green")}
      className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
      style={{backgroundColor:"green"}}
      >green</button>      <button 
      onClick={()=>setColor("magenta")}
      className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
      style={{backgroundColor:"magenta"}}
      >magenta</button>      <button 
      onClick={()=>setColor("cyan")}
      className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
      style={{backgroundColor:"cyan"}}
      >cyan</button>
    </div>
   </div>
  </div>
    
  )
}

export default App
