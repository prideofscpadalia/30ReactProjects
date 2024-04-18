import React from 'react'

export default function Button({text,btnClass,onClick,icon,onChange}) {
  return (
    <button className={`btn ${btnClass} text-center m-1 font-bold  bg-black text-white`} onClick={onClick}
    onChange={onChange} >
        {icon} 
        {!text ? "Click Me" : text}</button>
  )
}
