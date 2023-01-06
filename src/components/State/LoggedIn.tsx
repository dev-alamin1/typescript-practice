import userEvent from '@testing-library/user-event';
import React from 'react';
import { useState } from 'react';

const LoggedIn = () => {

    type UserProps ={
        name:string
        email:string
    }

    const [user,setUser] = useState<null | UserProps >(null);

    const handleLogin = ()=>{
        setUser({
            name:'Al-amin Mondal',
            email: 'dev.alaminmondal@gmail.com'
        })
    }

    const handleLogout= ()=>{
        setUser(null)
    }

    return (
        <div>
            {user?.email ? <button onClick={handleLogout}>Logout</button> :
            <button onClick={handleLogin} >Login</button>
            }
            
            {
                user?.email ? <div>Name {user.name} , Email  {user.email} </div> : ""
            }

        </div>
    );
};

export default LoggedIn;