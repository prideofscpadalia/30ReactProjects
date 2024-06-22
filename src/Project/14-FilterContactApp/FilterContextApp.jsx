import React,{useEffect, useRef} from 'react'
import Title from '../../Components/Title'
export default function () {
    const inputSearch = useRef(null);
    useEffect(() => {
      inputSearch.current.focus();
    })
    
  return (
    <div className='text-center'>
        <Title text={"Filter Context API"}/>
        <input type="text" placeholder='Search by first name'
        className='mb-2'
        style={{padding: "0.3rem 0.5rem"}} 
        ref={inputSearch}/>
        {/* <section className='flex' style={{gap: 15, maxWidth: 1600, margin: "auto"}}></section> */}
    </div>
  )
}
