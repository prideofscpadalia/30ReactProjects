import React,{useState} from 'react'
import LockSlider from './LockSlider'
import { FaLock } from "react-icons/fa";
import Zeus from "../08-slide-to-unlock/Img/Zeus.jpg"



export default function SlideToUnlock() {
  const [showLockScreen,setShowLockScreen] = useState(true);
  const [lockSliderValue,setLockSliderValue] = useState(0);
  const handleLockSliderValue = (e)=>{
    console.log(e.target.value);
    setLockSliderValue(e.target.value);
    
    const sliderValue = parseInt(e.target.value, 10);

    console.log(sliderValue);
    setLockSliderValue(sliderValue);
  
    // if (sliderValue === 100) {
    //   setShowLockScreen(false);
      
    // }

    
  }
  // const handleClick=()=>{
  //   setShowLockScreen(true)
  // }
const [uiProp,setUiProp] = useState({
  uiText:"Slide to Unlock Screen",
  uiBg:`url(${Zeus}) `,
  uiColor: "#eee",
})

  return (
    <div className='flex flex-col justify-center text-center items-center container' style={{
      height:"80vh",
      marginTop:"15vh",
      width:400,
      borderRadius:"1.4rem",
      border: "5px solid black",
      background: uiProp.uiBg,

      
    }}>
      <h1 className='title' style={{color :uiProp.uiColor}}>{uiProp.uiText}</h1>
      {showLockScreen ? <LockSlider width={"250px"} handleInput={handleLockSliderValue} value={lockSliderValue}/> : <FaLock className='unlockIcon' 
      //  onClick={handleClick}
      />}
      
    </div>
  )
} 
