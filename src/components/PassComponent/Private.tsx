import React from 'react';
import Login from './Login';

type nameType ={
    name:string
}

type privateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<nameType> 
    // <nameType> use na korle, Component er moddhe kon dhoroner
    // props pathabo , seta typescript dhorte parbena .. er karone error asbe

}

const Private = ({isLoggedIn,component:Component}:privateProps) => {
    if(isLoggedIn)
    {
        return <Component name="anik"/>
    }
    else{
        return <Login/>
    }
};

export default Private;