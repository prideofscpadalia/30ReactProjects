import { useState,useEffect } from 'react'
import Title from '../../Components/Title'
import Button from '../../Components/Button'
import { MdPostAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";


export default function TestimonialsApp() {
    // function handleButton (e){
    //     console.log("button clicked");
    //     console.log(e.target);
    // }
    const [testimonials,setTestimonials] = useState("");
    const [items,setItems] =useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      
      .then(json => setItems(json))
    },[testimonials])
    return (
    
    <div>
        <Title text={"TestimonialsApp"} />

        <Button onClick={()=>setTestimonials("posts")} text={"Posts"} btnClass="btn-info" icon={<MdPostAdd />}/> 

        <Button onClick={()=>setTestimonials("users")} text={"Users"} btnClass="btn-info" icon={<FaRegUser />}/> 

        <Button onClick={()=>setTestimonials("comments")} text={"Comments"} btnClass="btn-info" icon={<MdOutlineComment />}/> 

        <Button text={"album"} btnClass={"btn-success"} onClick={()=>setTestimonials("albums")} icon={<MdOutlineComment />}/>

        <Title classes={"subtitle text-primary"} text={!testimonials ? "select from above" : testimonials} />
        {!items ? null : items.map((item)=>{
                return (
                  <div className="card card-primary mb-2" key={item.id}>
                    <div className="card-body">
                      <h4>{item.title}{item.username}</h4>
                      <p>{item.body}</p>
                    </div>
                    

                  </div> 
                )            
        })}
    </div>
  )
}
