import React from 'react';

type cardProps = {
    children:string | React.ReactNode
    style: React.CSSProperties
}

const Card = ({children,style}:cardProps) => {
    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default Card;