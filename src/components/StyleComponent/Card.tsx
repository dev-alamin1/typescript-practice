import React from 'react';
import { cardProps } from '../Types/Types';

const Card = ({children,style}:cardProps) => {
    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default Card;