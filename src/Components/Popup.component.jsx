import React from 'react'
import Button from '../Components/Button'

export default function Popup({type,title,text,handlePopup}) {

    let popupContainer={
        position:"absolute",
        top:"0",
        height:"100vh",
        width:"100vw",
        background:"rgba(0,0,0,0.1)",
        zIndex:"-1",
    }
    let popStyle={
        position:"relative",
        margin:"40vh 10vw",
        zIndex:"1",
    }
  return (
    <div style={popupContainer}>
        <div className={`alert ${type}`} style={popStyle}>
            <div className="alert-close flex justify-between">
                <div className="flex flex-col">
                    <h4 className="text-left">{title && title}</h4>
                    <p>{text && text}</p>
                </div>
                <Button  text={"X"} onClick={()=>{
                    handlePopup(false)
                }}/>
            </div>
        </div>
    </div>
  )
}
