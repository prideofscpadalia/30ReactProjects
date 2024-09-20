import React from 'react'

export default function Button({text,btnClass,onClick,icon,onChange}) {
  return (
    // <button className={`btn ${btnClass} text-center m-1 font-bold `} onClick={onClick}
    //     onChange={onChange} >
    //     {icon && <span>icon</span>} 
    //     {!text ? "Click Me" : text}
    // </button>

    <button className={`btn ${btnClass}`} onClick={onClick} >{icon}{!text ? "click" : text} </button>
    
  )
}
