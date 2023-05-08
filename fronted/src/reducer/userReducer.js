import {
    LOGIN_SUCESS, LOGIN_REQUEST,
    LOGIN_FAIL, CLEAR_ERRORS, LOGOUT_SUCESS,
    LOGOUT_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCESS,
    UPDATE_PROFILE_FAIL, UPDATE_PROFILE_RESET, LOAD_USER_REQUEST, LOAD_USER_SUCESS, LOAD_USER_FAIL
} from "../constant/userconst";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case LOGIN_SUCESS:
        case LOAD_USER_SUCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGOUT_SUCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }


}
//update/profile

export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,

            };
        case UPDATE_PROFILE_SUCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_PROFILE_RESET:
            return {
                ...state,
                isUpdated: false,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }


}