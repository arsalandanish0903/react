import React, { useState } from 'react'

function ToggleButton() {
    const [togglebtn, settogglebtn] = useState(true)
  return (
    <>
        <button onClick={()=>{settogglebtn(!togglebtn)}} className='bg-gray-600 p-4 mr-5 text-white'>Click Me</button>
        <span>{togglebtn ? "ON" : "OFF"}</span>
    </>
  )
}

export default ToggleButton