import React, { useContext } from 'react';
import { ThemeCtx } from './ThemeContextProvider';

const Box = () => {
    const boxStyle = useContext(ThemeCtx);
    return (
        <div>
             <div style={{backgroundColor:boxStyle.primary.main, color:boxStyle.primary.text}}>Box</div>
        </div>
    );
};

export default Box;