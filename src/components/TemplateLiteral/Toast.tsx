import React from 'react';

type horizontalProps ='left' | 'center' | 'right'

type verticalProps  = 'top' | 'center' | 'bottom'


type toastProps = {
    position: `${horizontalProps}-${verticalProps}`
}

const Toast = ({position}:toastProps) => {
    return (
        <div>
             <h2>Toast position is {position} </h2>
        </div>
    );
};

export default Toast;