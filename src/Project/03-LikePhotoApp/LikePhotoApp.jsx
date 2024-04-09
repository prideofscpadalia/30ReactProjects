import React from 'react'
import Title from "../../Components/Title"
import Esignature from "../../Project/01-Esignature/Esignature"
import { LuSmile } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";
import { FcLike } from "react-icons/fc";

export default function LikePhotoApp() {
    // let like=false;
    const [like,setLike] = React.useState(false);
    const [count,setCount] = React.useState(0);
    const toggleLike =()=>{
        
        if(!like){            
            setLike(true)
            setCount(count+1)
        }else {
            setLike(false)
            setCount(count -1)
        }        
    }
  return (

    <div className='container text-center'>
        <Title  text={"Like Photo App"}/>
        <Title classes={"subtitle"}  text={`Like ${count}`}/>
        <div className="card bg-slate-900 m-auto text-white"
        style={{width: 330, cursor: "pointer"}}
        >
            <div className="card-header fs-xl">
                <LuSmile/>
                <h2>Images</h2>
            </div>
            <img src="https://w.forfun.com/fetch/b4/b4d430320229744245679e19e50b6f03.jpeg?h=900&r=0.5" alt="img" style={{height:"fit-content" , background:"olive"}} onDoubleClick={toggleLike}/>
            <div className="card-footer fs-xl flex p-3"  style={{justifyContent: 'space-between'}}>
            <LiaComments />
            {like ? (
            <FcLike onClick={toggleLike}/> 
            ): (
            <FaRegHeart onClick={toggleLike} />
            )}
            
            
            </div>
        </div>
    </div>
  )
}
