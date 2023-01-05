import React from 'react';

// user info type
type userDemoInfo = {
    user :{
    name:string
    age:number
    phone:number
    isActive:boolean
    }
}

const User = ({user}:userDemoInfo) => {
    return (
        <div>
            {/* <p>User name {props.user.name} , age {props.user.age} ,phone {props.user.phone} {props.user.isActive? 'Active' : "Not Active"}</p> */}

            <p>User name {user.name} , age {user.age} ,phone {user.phone} {user.isActive? 'Active' : "Not Active"}</p>

        </div>
    );
};

export default User;