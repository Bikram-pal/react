import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color , setcolor] = useState('olive');
  // function changeColor(color)
  // {
  //   setcolor(color);
  // }


  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex justify-center bottom-14 inset-x-0 px-2'>
        <div className='bg-white rounded-full p-2 shadow-lg gap-2 flex'>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-md hover:shadow-lg transition-shadow bg-red-600' onClick={()=>{setcolor('red')}}>red</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-md hover:shadow-lg transition-shadow bg-green-500' onClick={()=>{setcolor('green')}}>green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-md hover:shadow-lg transition-shadow bg-yellow-400' onClick={()=>{setcolor('yellow')}}>yellow</button>
        </div>

        
      </div>
    </div>
  )
}

export default App
