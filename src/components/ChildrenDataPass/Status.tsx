import React from 'react';

type childrenDataTypes = {
    children:string
}

const Status = ({children}:childrenDataTypes) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Status;