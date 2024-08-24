import React from 'react'
import Title from '../../Components/Title'

function RandomColor() {

   function handleClick(event){
    console.log(`color code = ${randomcolor()}`)
    document.body.style.backgroundColor=randomcolor();
    // event.target.style.backgroundColor=randomcolor()
   }

    function randomcolor (){
        let hex = "1234567890ABCDEF";
        let color = "#"
        for(let i = 0;i<6;i++){
          // random fn produce only 0 and 1 by multiplying by 16 we increased its range
          // this loop has to rotate 6 times to to get 1 hex code
            color += hex[Math.floor(Math.random()*16)];
        }return color;
    }
  return (   
    <div className='container text-center m-auto'>
         <Title text={"RandomColor"} classes={"mb-8"}/>
         <button className="btn btn-danger" onClick={handleClick}>Click Me</button>
         {/* <button className="btn btn-success" onClick={handleClick}>Click Me</button>
         <button className="btn btn-primary" onClick={handleClick}>Click Me</button>
         <button className="btn btn-warning" onClick={handleClick}>Click Me</button> */}
              
    </div>
  )
}

export default RandomColor