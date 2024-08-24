import React, { useState } from 'react'
import Title from '../../Components/Title'

export default function Esignature() {

  const [name,setName] =useState("")
  const [date,setDate] = useState("01/01/2024")
  const [content,setContent] = useState("");

 const handleName=(e)=>{
    setName(e.target.value);
  }
  const handleDate =(e)=>{
    setDate(e.target.value)
  }
  const handleContent=(e)=>{
    setContent(e.target.value)
  }

  const inputStyle={
    border: "1px solid red",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.35 rem" ,
    
  }
  //this is real dom element
  document.body.style.background="#eee"

  return (
    <div className="container text-center">
      <Title classes={"title mb-6"} text={name} />
      <Title classes={"subtitle mb-6"} text={date} />
      <p >{content}</p>


      <textarea className='textarea' cols="60" rows="5" placeholder='write here ...' value={content} onChange={handleContent}></textarea>
      {/* i want to disable the above content box after the content is written on it*/}
      <footer className='flex' style={{justifyContent:"space-around", position:'relative', top:"35vh"}}>
      <input type="date" style={inputStyle} value={date} onChange={handleDate}/>
      <input type="text" style={inputStyle} value={name} onChange={handleName}/>      
      </footer>
    </div>
  )
}
 

