import React from 'react';

type NameType = {
    name:string
}

const Greet = (props:NameType) => {
    return (
        <div>
            <h2>Hi There! Welcome {props.name}</h2>
        </div>
    );
};

export default Greet;