import React from 'react';

type LoginInfoType ={
    name:string
    isLogin:boolean
}

const Login = ({name,isLogin}:LoginInfoType) => {
    return (
        <div>
            {isLogin ? <h2>Welcome {name} </h2> : <h2>Welcome Guest User</h2>}
        </div>
    );
};

export default Login;