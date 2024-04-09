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
    const [testimonials,setTestimonials] = useState();
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

        <Title classes={"subtitle text-primary"} text={!testimonials ? "select from above" : testimonials} />
        {!items || Array.isArray(items) ? null : items.map((item)=>{
                return (
                  <div className="card card-primary mb-2">
                    {item.title}
                  </div> 
                )            
        })}
    </div>
  )
}
