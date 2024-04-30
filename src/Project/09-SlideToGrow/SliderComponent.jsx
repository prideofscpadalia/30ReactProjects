import React from 'react'
export default function SliderComponent({setValue, setHandler , bgColor ,textColor}) {
    const sliderStyle={
        appearance:"none",
        width:"100%",
        height:25,
        background: "lightgray",
        courser:"pointer",
    }
  return (
    <div className='container flex flex-col 'style={{gap:100}}>        
        <input type="range" min={0} max={100}  value={setValue} onInput={setHandler} style={sliderStyle}/>
        <div 
            style={{
                color:!textColor ? "black" : textColor,
                background:!bgColor ? "lightgray" : bgColor,
                width:`${setValue*3}px`,
                height:`${setValue*3}px`,
                fontWeight:600,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:"50%",
            }}>
            <span>{setValue}</span>
        </div>
    </div>
  )
}
