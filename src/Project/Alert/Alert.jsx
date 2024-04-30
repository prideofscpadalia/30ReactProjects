import React,{useEffect, useState} from 'react'
import Button from '../../Components/Button'
export default function Alert({type,text,delay=false}) {
  const [showAlert,setAlert] = useState(true);
  const handleClose =(e)=>{
    console.log("the button is working");
    e.target.parentElement.parentElement.classList.add("fadeAlert")
    setTimeout(()=>{
      setAlert(false)
    },400)
    
  }
  useEffect(()=>{
    delay &&
    setTimeout(()=>{
      setAlert(false);
    },3000)
  })
  return (showAlert &&  (
    <div className={`container alert alert-${type} m-4 `}>
      <div className='flex justify-between'>
        <span className='cursor-pointer mt-2'>{text}</span>
        <Button className="btn-close" text={"X"} onClick={handleClose}/>
      </div>      
    </div>
    )
  )
}
