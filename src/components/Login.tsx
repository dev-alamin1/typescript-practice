import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContextProvider';

type LoginInfoType ={
    name:string
    email:string
    isLogin?:boolean
}

const Login = () => {
    const userInfo = useContext(AuthContext);
   console.log(userInfo)
    return (
        <div>
             <p>Name: {userInfo.name}</p>
             <p>Email: {userInfo.email}</p>
        </div>
    );
};

export default Login;