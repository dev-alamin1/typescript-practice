import React from 'react';
import { userDemoInfo } from './Types/Types';

const User = ({user}:userDemoInfo) => {
    return (
        <div>
            <p>User name {user.name} , age {user.age} ,phone {user.phone} {user.isActive? 'Active' : "Not Active"}</p>

        </div>
    );
};

export default User;