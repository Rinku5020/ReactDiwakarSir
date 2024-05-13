import { createContext, useState} from "react";

export const ThemeChange = createContext()
 
export function ThemeChangeProvider({children})
 {
    const [theme,setTheme]=useState("light")

    const ToggleTheme=()=>
        {
            setTheme(theme=="light" ? "dark":"light")
        }
    return(<ThemeChange.Provider value={{theme,ToggleTheme}}>
        {children}
    </ThemeChange.Provider>)
 }