import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import classes from './Login.module.css'
import AuthContext from "../Store/AuthContext";

const Login = props => {

    const [isLogin, setIsLogin] = useState(true);
    const [isLodding, setIsLodding] = useState(false);
    const authCntx =  useContext(AuthContext)
    const history =  useHistory()

    const enteredPasswordRef = useRef()
    const enteredEmailRef = useRef()

    const submiLogIntHandle = async (event) => {
        try {
            event.preventDefault()

            const enteredEmail = enteredEmailRef.current.value;
            const enteredPassword = enteredPasswordRef.current.value;

            const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBG525dQLh8AKxMmQHyiyUSkRG5YJkahPw`, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-type': 'application/json'
                }

            })

            const data = await res.json()

            if(data.idToken){
                authCntx.login(data.idToken)
                history.replace('/')
            }
            if(data.error){
                alert(data.error.message)
            }

            console.log('data', data)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submiLogIntHandle}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' ref={enteredEmailRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        ref={enteredPasswordRef}
                        required
                    />
                </div>

                {!isLodding && <button type='submit'>Submit</button>}
                {isLodding && <p>Loading...</p>}
                {/* <div className={classes.actions}>
              <button
                type='button'
                className={classes.toggle}
    
                // onClick={switchAuthModeHandler}
              >
                {isLogin ? 'Create new account' : 'Login with existing account'}
              </button>
            </div> */}
            </form>
        </section>
    );
}

export default Login