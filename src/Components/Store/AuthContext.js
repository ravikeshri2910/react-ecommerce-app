import React, { useState } from "react";

const AuthContext = React.createContext ({
    token : '',
    isLoggedIn : false,
    login : ()=>{},
    logout : ()=>{}
})


export const AuthContextProvider = (props) =>{

    const initialToken = localStorage.getItem('token')

    const [token , setToken] = useState(initialToken)

    let userLoggegIn;
    if(token){
        userLoggegIn = true
    }else{
        userLoggegIn = false
    }


    const loginHandler = (token) =>{
        localStorage.setItem('token', token)
        setToken(token)
    }

    const logoutHandler = () =>{
        localStorage.removeItem('token')
        setToken('')
    }

    const authCntx = {
        token : token,
        isLoggedIn : userLoggegIn,
        login : loginHandler,
        logout : logoutHandler
    }

    return (
        <AuthContext.Provider value={authCntx}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext