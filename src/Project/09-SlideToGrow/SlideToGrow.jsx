import React ,{useState} from 'react'
import SliderComponent from './SliderComponent'
import Title from '../../Components/Title'

export default function SlideToGrow() {
    const [slideValue,setSlideValue] = useState(0);
    const handleSliderValue=(e)=>{
        // console.log(e.target.value);
        setSlideValue(e.target.value);
    }


    let bgColor;
    let textColor;

    if(slideValue < 25){
        bgColor = "red"
        textColor = "white"
    }
 
    if(slideValue >= 25 && slideValue <= 50){
        bgColor = "blue"
        textColor = "white"
    }
    if(slideValue >= 51 && slideValue <= 75){
        bgColor="green"
        textColor="white"
    }
    if(slideValue >= 75){
        bgColor = "orange"
        textColor = "white"
    }
    if(slideValue == 100){
        bgColor = "pink"
        textColor = "white"
    }
  return (
    <div className='container text-center'> 
        <Title text={"Slide to Grow"}/>     
        <Title text={"Understand how the props are used here so you can use them later in your own project"}/>
        <SliderComponent setValue={slideValue} setHandler={handleSliderValue} bgColor={bgColor} textColor={textColor}/>
    </div>
  )
}
