import React, { Fragment, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {  updateProfile } from "../action/userAction";
import { UPDATE_PROFILE_RESET } from "../constant/userconst";


const UpdatePassword = ({ history }) => {
    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector((state) => state.profile);
    const [name, setName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const { isAuthenticated } = useSelector((state) => state.user);
    const updatePasswordSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("newPassword", newPassword);


        dispatch(updateProfile(myForm));
    };

    useEffect(() => {
        if(isAuthenticated ===false){
            history.push("/");
        }

        if (isAuthenticated) {
            alert.success("Profile Updated Successfully");

            history.push("/account");

            dispatch({
                type: UPDATE_PROFILE_RESET,
            });
        }
    }, [dispatch, error, alert, history, isUpdated,isAuthenticated]);

    return (
        <Fragment>
            <div className="updatePasswordContainer">
                <div className="updatePasswordBox">
                    <h2 className="updatePasswordHeading">Update Profile</h2>

                    <form
                        className="updatePasswordForm"
                        onSubmit={updatePasswordSubmit}
                    >
                        <div className="Name">

                            <input
                                type="name"
                                placeholder="Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>


                        <div className="loginPassword">

                            <input
                                type="password"
                                placeholder="New Password"
                                required
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Change"
                            className="updatePasswordBtn"
                        />
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default UpdatePassword;