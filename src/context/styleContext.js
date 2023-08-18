import React, { createContext, useState } from "react";

export const styleContext = createContext()
    


function StyleContext( { children } ) {
    const [ primaryColor, setPrimaryColor ] = useState("#27AE60")
    const [ secondaryColor, setSecondaryColor ] = useState("#191D2B")
    const [ tertiaryColor, setTertiaryColor ] = useState("#323B54")
    

    return (
        <styleContext.Provider value={{
            primaryColor,
            setPrimaryColor,
            secondaryColor,
            setSecondaryColor,
            tertiaryColor,
            setTertiaryColor
        }
        }>
            { children }
        </styleContext.Provider> 
    )
}

export default StyleContext