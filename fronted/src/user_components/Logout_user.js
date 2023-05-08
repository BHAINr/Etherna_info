import React, { Fragment } from 'react'
import { createBrowserHistory } from 'history';
import { useDispatch } from 'react-redux';
import { logout } from '../action/userAction';
import "./Logout_user.css";


const Logout_user = () => {
    const history = createBrowserHistory();
    const dispatch = useDispatch();
    const options = [
        { name: "Register", func: register },
        { name: "Login", func: login },
        { name: "Profile", func: profile },
        { name: "updateProfile", func: updateProfile },
        { name: "Logout", func: logoutUser },


    ]

    function register(e) {
        e.preventDefault();
        history.push("/register");
        window.location.reload();
    }

    function login(e) {
        e.preventDefault();
        history.push("/login");
        window.location.reload();
    }

    function profile(e) {
        e.preventDefault();
        history.push("/profile");
        window.location.reload();
    }
    function updateProfile(e) {
        e.preventDefault();
        history.push("/profile/update");
        window.location.reload();
    }

    function logoutUser(e) {
        e.preventDefault();
        dispatch(logout());
        history.push("/", alert("Logout sucess"));

    }


    return (
        <Fragment>


            <div class="btn-group" className="profile">

                <div class="dropdown-menu">
                    {options.map((item) => (
                        <a href="#" class="dropdown-item" name={item.name} onClick={item.func} >{item.name}</a>

                    ))}

                </div>
            </div>

        </Fragment>
    )
}

export default Logout_user




