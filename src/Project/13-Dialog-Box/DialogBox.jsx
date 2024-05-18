import React,{useEffect, useState} from 'react'
import Button from '../../Components/Button'
import {BsFillEmojiFrownFill,BsFillEmojiSmileFill} from 'react-icons/bs'
import './Bounce.css'
export default function DialogBox() {
  const [subscription,setSubscription] = useState({
    title:"Hello",
    description:"Would you like to subscribe",
    state: null,
    justifyContent:"space-between",
  });
 const handleSubscription = () =>{
  setSubscription({
    title:"Thank you",
    description:"for your subscription",
    state: "subscribed",
    justifyContent:"flex-end",
  })
 }
 const [icon,setIcon] = useState();
 let iconStyle={
  fontSize:"80px",
  justifySelf:"center",
  color:
    subscription.state === "subscribed" ? "rgba(59,137,90,0.4" : "rgba(25,118,160,0.4)"
 }
  // useEffect(()=>{
  //   subscription.state === "subscribed" && setIcon(<BsFillEmojiSmileFill style={iconStyle}/>);
  //   subscription.state === "unsubscribed" && setIcon(<BsFillEmojiFrownFill style={iconStyle}/>);
  // },[subscription.state]);
 useEffect(()=>{
  if(subscription.state === "subscribed"){
    setIcon(<BsFillEmojiSmileFill style={iconStyle}/>)
    document.body.style.backgroundColor="rgba(59,137,90,0.4"
  }
  if(subscription.state === "unsubscribed"){
    setIcon(<BsFillEmojiFrownFill style={iconStyle}/>)
    document.body.style.backgroundColor="rgba(25,118,160,0.4"
  }
 })
 const handleUnsubscribe=()=>{
  setSubscription({
    title:"sorry",
    description:"to see you go",
    state:"unsubscribed",
    justifyContent:"flex-end"
  })

 }
 const[bounce,setBounce] = useState('');
 useEffect(() => {
  setTimeout(() =>{
    setBounce("");
  },500);
  return () => setBounce("bounce")
 })


  return (
    <div className={`card bg-light m-auto mt-4 ${bounce}`} style={{width:350}}>
      <div className="card-body">
        <div className="d-grid" style={{gridTemplateColumns:"2fr 1fr",
          alignItems:"center",
          alignSelf:"center",
          justifyContent:"center"
        }}>
          <section>
            <h2 className="card-title">{subscription.title}</h2>
            <h6 className="card-text">{subscription.description}</h6>
          </section>
          <div>{icon}</div>
        </div>
      </div>
      <br />
      <div className="flex mb-2 px-1" style={{
        width:"100%",
        justifyContent:`${subscription.justifyContent}`
      }}>
        {subscription.state === null && <Button text={"Cancle"} btnClass={"btn-success"} style={{alignItems:"center"}}/>}
        {subscription.state === "subscribed" ? null : <Button text={"Subscribe"} btnClass={"btn-danger"} style={{alignItems:"center"}} onClick={handleSubscription}/>}
        {subscription.state === "subscribed" ? <Button text={"Unsubscribe"} btnClass={"btn-danger btn-block"} style={{textAlign:"center"} } onClick={handleUnsubscribe}/> : null}
      </div>
    </div>
  )
}
 