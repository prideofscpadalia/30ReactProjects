import React ,{useEffect, useRef, useState}from 'react'
import Title from '../../Components/Title'
import { ProgressBar } from '../../Components/ProgressBar';

export default function ProgressBarContainer() {
    const [completed,setCompleted] = useState(51);
    const [status,setStatus] = useState({
        ui:50,
        ux:28,
        data:78,
    });

    const projectData = [{
            bgColor:"#7633f9",
            completed:status.ui
        },
        {
            bgColor:"#28a745",
            completed:status.ux
        },
        {
            bgColor:"#dc3545",
            completed:status.data
        },
    ]

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
      setInterval(() => setCompleted(Math.floor(Math.random()*100 +1)),3000)
    },[])
    
  return (
    
    
    <div className='container container-sm mx-auto text-center'>
        <Title text="Progress Bar" />
        <h2>ProgressBarContainer</h2>
        <ul>
            <li className='mb-3'>UI Status :
                <input type="number" 
                min={0}
                max={100}
                style={inputStyle} 
                value={status.ui} 
                ref={uiInput}
                onChange={(e) => setStatus({...status,ui:e.target.value})}
                />
            </li>

            <li className='mb-3'>UX Status :
                <input type="number" 
                min={0}
                max={100}
                style={inputStyle} 
                value={status.ux} 
                // ref={uiInput}
                onChange={(e) => setStatus({...status,ux:e.target.value})}
                />
            </li>

            <li className='mb-3'>DATA Status :
                <input type="number" 
                min={0}
                max={100}
                style={inputStyle} 
                value={status.data} 
                // ref={uiInput}
                onChange={(e) => setStatus({...status,data:e.target.value})}
                />
            </li>
        </ul>

         {projectData.map((data,index) =>(
            <ProgressBar bgColor={data.bgColor} completed={data.completed} key={index}/>
         ))}
        <ProgressBar bgColor={completed > 50 ?"#28a745" : "#dc3545"} completed={completed}/>
    </div>
  )
}
