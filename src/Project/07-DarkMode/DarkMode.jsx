import React,{useEffect, useState} from 'react'
import Blog from './Blog'
import { ThemeContext ,themes} from './context/theme-context';
// context hook is designed to share data that is kind of global data it can be shared every where
export default function DarkMode() {

    const [theme,setTheme] = useState(themes.light);
    function changeTheme(){
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
    }

    useEffect(() => {
      switch(theme){
        case themes.light:
            document.body.classList.remove("bg-black")
            document.body.classList.remove("text-white")
            document.body.classList.add("bg-white")
            document.body.classList.add("text-dark")
            break;

        case themes.dark:
            document.body.classList.remove("bg-white")
            document.body.classList.remove("text-dark")
            document.body.classList.add("bg-black")
            document.body.classList.add("text-white")
            break;
      }
    }, [theme])
    
  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
        <Blog theme={theme} />
    </ThemeContext.Provider>
  )
}
