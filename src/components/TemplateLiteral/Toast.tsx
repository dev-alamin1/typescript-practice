import React from 'react';

type horizontalProps ='left' | 'center' | 'right'

type verticalProps  = 'top' | 'center' | 'bottom'


type toastProps = {
    // position: `${horizontalProps}-${verticalProps}`
    // this will also make postion = center-center 
    // we have to solve this problem.. so we can exclude

    position: Exclude<`${horizontalProps} - ${verticalProps}`,'center-center'> | 'center'
    
}

const Toast = ({position}:toastProps) => {
    return (
        <div>
             <h2>Toast position is {position} </h2>
        </div>
    );
};

export default Toast;