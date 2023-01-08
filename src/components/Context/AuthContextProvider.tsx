import React, { createContext } from 'react';

// muloto context er children hisebe kono html componnent use kora hoy.
// ai karone , children er type hobe React.ReactNode 

const user = {
    name:"Al-amin",
    email:"alaminmondal@gmail.com"
}

export const  AuthContext = createContext(user);

const AuthContextProvider = ({children}:{children:React.ReactNode}) => {
    return (
        <AuthContext.Provider value={user}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;