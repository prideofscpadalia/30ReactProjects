import React from 'react'
import './LockSlider.css'
export default function LockSlider({width,sliderValue,handleInput}) {
    let sliderStyle = {
        appearance: "none",
        width: !width ? "300px" : width,
        height: "60px",
        background:"#808080",
        outline:"none",
    }
  return (
    <div>
        <input 
        type="range" 
        className='slider m-6 p-2 rounded-full align-middle justify-center' 
        style={sliderStyle} 
        value={sliderValue} 
        onInput={handleInput} />
    </div>
  )
}
