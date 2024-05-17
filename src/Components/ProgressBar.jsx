import React from 'react'
export const ProgressBar =({bgColor,completed}) =>  {

    const containerStyle={
        height:25,
        width:"100%",
        backgroundColor:'#e0e0de',
        borderRadius:50,
        margin:50,
        
    }
    const fillerStyle={
        backgroundColor:bgColor,
        height:"100%",
        width:`${completed}%`,
        borderRadius:"inherit",
        textAlign:"right",
        transition:"width 1s ease-in-out",
    }
    const lableStyle={
        padding:15,
        // margin:10,
        color:"#fff",
        fontWeight:"bold",
    }
  return (
    <div className='container' style={containerStyle}>
        <div style={fillerStyle}>
            <span style={lableStyle}>{`${completed}%`}</span>
        </div>
    </div>
  )
}
