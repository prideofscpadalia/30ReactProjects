import React,{useContext} from 'react'
import Title from "../../Components/Title"
import Button from "../../Components/Button"
import { ThemeContext } from './context/theme-context'
export default function Blog() {

    const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <div className='container p-1'>
        <Title text={`My Blog with ${theme} Theme`}/>
        <span style={{position:"absolute", top:10,right:10}}>
            <Button 
            text={theme === "dark" ? "Light" : "Dark"} onClick={changeTheme} btnClass={`${theme === "dark" && "btn-light" }`}/>
        </span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo adipisci amet non earum placeat, quaerat corporis qui deleniti tenetur sapiente dignissimos alias dolorem quasi cupiditate eveniet atque obcaecati laboriosam facere?</p>
    </div>
  )
}
