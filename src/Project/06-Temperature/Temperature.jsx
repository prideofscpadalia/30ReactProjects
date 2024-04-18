import React,{useState} from 'react'
import Button from '../../Components/Button'
export default function Temperature() {

  const [temperature,setTemperature] = useState(0);

  const increaseTemperatue=()=>{
    setTemperature(temperature +1)
  }
  const decreaseTemperatue=()=>{
    setTemperature(temperature -1)
  }
  return (
    <div className='container mt-3  text-center'>
        <div className=" card bg-light m-auto shadow-lg" style={{width:200}}>
            <h1 className= {`font-bold text-light card rounded-circle pt-5 ${temperature > 0 ? "bg-danger font-black text-blue-700" : "bg-info"}`}
            style={{height:200, width:200, border:"2px solid #666"}}
            >{temperature}° C</h1>
            <div className="flex-my-2">
              <Button text="-" onClick={decreaseTemperatue}/>
              <Button text="+" onClick={increaseTemperatue}/>
            </div>
        </div>
    </div>
  )
}
 