import React ,{useEffect, useRef}from 'react'
import Title from '../../Components/Title'
export default function ProgressBarContainer() {
    const inputStyle={
        width:50,
        border:"none",
        outline:"none",
        textAlign:"center",
        borderBottom:"1px solid lightgray",
        backgroundColor:"#f2f2f2"
    }

    const uiInput = useRef(null);

    
    useEffect(() => {
      uiInput.current.focus();
    })
    
  return (
    
    
    <div className='container container-sm mx-auto text-center'>
        <Title text="Progress Bar" />
        <h2>ProgressBarContainer</h2>
        <ul>
            <li className='mb-3'>UI Status :
                <input type="number" 
                style={inputStyle} 
                value={""} 
                ref={uiInput}
                onChange={(e) => console.log(e.target.value)}
                />
            </li>

            <li className='mb-3'>UX Status :
                <input type="number" 
                style={inputStyle} 
                value={""} 
                onChange={(e) => console.log(e.target.value)}
                />
            </li>

            <li className='mb-3'>DATA Status :
                <input type="number" 
                style={inputStyle} 
                value={""} 
                onChange={(e) => console.log(e.target.value)}
                />
            </li>
        </ul>
    </div>
  )
}
