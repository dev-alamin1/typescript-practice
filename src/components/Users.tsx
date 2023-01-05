/*
    ekhane amra array like object receive korbo.
    muloto akti purno object banate hobe, jekhane user er info thakbe.
    er por, sei object er pore [] dile, seti array like object mane, object er onk gulo collection
    hobe 
*/

import React from 'react';

type UserType = {
   
    users:{
        name:string
        age:number 
        bangladeshi: boolean
    }[]

}

const Users = ({users}: UserType) => {
    return (
        <div>
             <ul>
                {users.map((user,index)=>{
                    return <li key={index}>{user.name} , age {user.age} , {user.age? "Bangladeshi" : "Foreighner"}</li>
                })}
             </ul>
        </div>
    );
};

export default Users;