import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../action/userAction';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const Login = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.user);
    const history = createBrowserHistory();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log("Login Form Submited");
        dispatch(login(loginEmail, loginPassword));
        history.push("/",alert("submited"));
        
    }

    useEffect(() => {
        if (isAuthenticated) {
            
        }
    }, [dispatch, history, isAuthenticated]);


    return (
        <Fragment>
            <div className="LoginSignUpContainer">
                <div className="LoginSignUpBoxx" id="LoginSignUpBoxx">
                    <h1 className="logo">Login</h1>
                    <form className="loginForm" onSubmit={loginSubmit}>
                        <div className="loginEmail">

                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />

                        </div>
                        <div className="loginPassword">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>
                        <Link to="/" alert="submited"><input type="submit" value="Login" className="loginBtn" /></Link>
                    </form>


                </div>
            </div>
        </Fragment>
    )
}

export default Login
