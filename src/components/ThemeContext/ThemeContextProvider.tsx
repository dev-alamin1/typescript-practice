import React, { createContext } from 'react';
import { myTheme } from './Theme';



export const ThemeCtx = createContext(myTheme);

const ThemeContextProvider = ({children}:{children:React.ReactNode}) => {
    return (
         <ThemeCtx.Provider value={myTheme}>
            {children}
         </ThemeCtx.Provider>
    );
};

export default ThemeContextProvider;