import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({children})
{
    const[log,setLog]=useState(false)
    const login =()=>
        {
            setLog(true)
        }
    const logout =()=>
        {
            setLog(false)
        }    
    return(
    <AuthContext.Provider value={{log,login,logout}}>
    {children}
    </AuthContext.Provider>)
}
