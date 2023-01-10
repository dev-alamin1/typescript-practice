import React from 'react';

const LoggegInUser = ({name}:{name:string}) => {
    return (
        <div>
            <h1>UserName : {name && name}</h1>
        </div>
    );
};

export default LoggegInUser;