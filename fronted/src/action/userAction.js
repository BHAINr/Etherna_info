import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCESS, LOGIN_FAIL, LOGOUT_SUCESS, LOGOUT_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAIL, CLEAR_ERRORS, LOAD_USER_REQUEST, LOAD_USER_SUCESS, LOAD_USER_FAIL, LOGIN_REQUEST1, LOGIN_SUCESS1, LOGIN_FAIL1 } from "../constant/userconst";
import { useSelector } from "react-redux";

//Login user
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const {isAuthenticated} = useSelector((state)=>state.user);
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`/api/v1/login`, { email, password }, config);
        //alert("sucess");
        dispatch({ type: LOGIN_SUCESS, payload: data.user });
        localStorage.setItem('jwtToken', isAuthenticated);
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
        // alert("submit again");
    }
};


//Logout user
export const logout = () => async (dispatch) => {
    try {

        await axios.post(`/api/v1/logout`);

        dispatch({ type: LOGOUT_SUCESS });
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.error.response.data.message,
        })
    }
}

//update/profile
export const updateProfile = (myForm) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = { header: { "Content-Type": "application/json" } };

        const { data } = await axios.put(`/api/v1/update`,myForm, config);
       
    } catch (error) {
        dispatch({
            ype: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        })
    }
}



// Get user Profile details-------
export const getUserDetail = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        const { data } = await axios.get(`/api/v1/detail`);

        dispatch({
            type: LOAD_USER_SUCESS,
            payload: data.user,
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });

};
