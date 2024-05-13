import { createContext } from "react";

export const Contextapi = createContext()

 export function ContextapiProvider({children})
{
    return(<Contextapi.Provider value={"i am rinku"}>
        {children} //App
    </Contextapi.Provider>)
}