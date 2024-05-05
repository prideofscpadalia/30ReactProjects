import React,{useState ,useEffect} from 'react'
import Popup from '../../Components/Popup.component'
import Title from '../../Components/Title'
import Button from '../../Components/Button'


export default function PopupApp() {
  const [triggerPopup,setTriggerPopup] =useState(false);
  const handleClick=()=>{
    console.log("trigger btn clicked");
    setTriggerPopup(true)
  }
  useEffect(() => {
    setInterval(()=>{
      setTriggerPopup(false)
    },)
  }, [])
  
  return (
    <div className='text-center mb-5'>
      <Title text={"Click below for pop up or wait 3 sec to occur it on its own"}/>
      <Button btnClass={"btn-primary"} onClick={handleClick} text={"Triggre Popup"} />
      {triggerPopup && <Popup type={"alert-info"} title={"Trigger"} text={"this pop up is triggred by a button click"} handlePopup={setTriggerPopup}/>}
    </div>
  )
}
