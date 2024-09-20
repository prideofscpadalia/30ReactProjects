import {useEffect, useState} from "react";
import Title from "../../Components/Title";
import Button from "../../Components/Button";
import { MdPostAdd } from "react-icons/md";
import {BiCommentDetail} from "react-icons/bi";
import {FaUserAlt} from "react-icons/fa";
// import Card from 'react-bootstrap/Card';


export default function TestimonialsApp() {
  
  const [testimonials,setTestimonials] = useState("");
  const [items,setItems] = useState(); 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
    .then(response => response.json())
    .then(json => setItems(json))
  
  }, [testimonials])
  
    
    return (          
      <div className="container m-auto">
        <Title text="Refined Testimonial App"/>      

        <Button text="Posts" btnClass={'btn-info'} icon={<MdPostAdd />} onClick={()=>setTestimonials("Posts")}/>
        <Button text="Comment" btnClass={'btn-info'} icon={<BiCommentDetail/>} onClick={()=>setTestimonials("Comments")}/>
        <Button text="Users" btnClass={'btn-info'} icon={<FaUserAlt />} onClick={()=>setTestimonials("Users")}/>
        <p className={"subtitle  text-primary"}>{!testimonials ? "select from above" : testimonials}</p>
        {!items ? null : 
        items.map((item)=>{
          return (
              <div className="card card-primary mb-2" key={item.id}>
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </div>
                </div>
          )
        })
        }
      </div>
    )  
}


