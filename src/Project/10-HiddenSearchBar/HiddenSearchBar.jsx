import React ,{useState,useEffect,useRef}from 'react'
import {BsSearch} from 'react-icons/bs'
export default function HiddenSearchBar() {

    const [uiProps,setUiPorps] = useState({
        bg:"purple",
        shadow:"",
        transitions:"all .3s ease",
        opacity:0,
        showSearchIcon:true,
        showSearchBar:false,
        borderBottomColor:"#fff"
    })

    let body = (document.body.style)
    let inputStyle={
        margin:"20vh",
        width:"20vh",
        height:"30px",
        padding:"1rem .3rem",
        border:"none",
        outline:"none",
        background:"transparent",
        borderBottom:`1px solid ${uiProps.borderBottomColor}` ,
        fontSize:"1.3rem",
        color:"#eee",
        boxShadow:"0px 55px 90px -15px rgba(0,0,0,0.75)",
        opacity:uiProps.opacity,
        transition:"all .3s ease"
    }

    let bsStyle={
        color:"#fff",
        fontSize: 50,
        cursor:"pointer",
        position:"absolute",
        top:20,
        right:20,

    }
    const inputEl = useRef(null);
    useEffect(()=>{
        body.background=uiProps.bg;
        body.boxShadow=uiProps.shadow;
        body.transition=uiProps.transitions;
        uiProps.showSearchBar && inputEl.current.focus()
    },[uiProps.shadow],[uiProps.showSearchBar]);
    //you can also set dependency as when there is any change in the transition the useEffect trigger although when component render the useEffect trigger but it will trigger again at the dependency

    const searchBar=()=>{
        setUiPorps({
            opacity:1,
            showSearchIcon:false,
            showSearchBar:true,
        })
        
    }
    const handleSearchFocus =()=>{
        setUiPorps({
            shadow:"inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)",
            borderBottomColor:"green",
        })
    }
    const handleSearchBlur=(e)=>{
        setUiPorps({
            shadow:"none",
            opacity:0,
            borderBottomColor:"#fff",
            showSearchIcon:true,
        })
    }
    
    
  return (
    <div className='container flex' style={{height:"100vh"}}>
        
        
        {uiProps.showSearchIcon ? (
            <BsSearch style={bsStyle}  onClick={searchBar} />) : <input 
            type="text" 
            placeholder='Search' 
            style={inputStyle} 
            onFocus={handleSearchFocus} 
            onBlur={handleSearchBlur}
            ref={inputEl}
            />}
    </div>
  )
}
