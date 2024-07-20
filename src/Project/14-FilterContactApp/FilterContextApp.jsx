import React,{useEffect, useRef} from 'react'
import Title from '../../Components/Title'
import ContextData from './Data.json'
import Contact from './Contact';
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
        <section className='d-flex' style={{gap: 15, maxWidth: 1600, margin: "auto"}}>
        {ContextData.map((contact) => (
                <Contact contact={contact} />
            ))}
        </section>
    </div>
  );
}
