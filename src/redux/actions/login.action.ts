import { LoginConstants } from "../constants/login.constants";
import { Dispatch } from "react";
import { loginService } from "../../services";
import { history } from "../helper/history";

interface Login {
    type: LoginConstants.LOGIN_REQUEST
}

interface LoginSuccess {
    type: LoginConstants.LOGIN_SUCCESS;
    payload: {};
}

interface LoginFail {
    type: LoginConstants.LOGIN_FAILURE;
}

interface Logout {
    type: LoginConstants.LOGOUT;
}
export type LoginAction =
    | Login
    | LoginSuccess
    | LoginFail
    | Logout;


    export const handleUserLogin = (dispatch: Dispatch<Login>) => {
        dispatch({ type: LoginConstants.LOGIN_REQUEST });
    };
    
    export const handleLoginSuccess = (
        dispatch: Dispatch<LoginSuccess>,
        response: any
    ) => {
        dispatch({
            type: LoginConstants.LOGIN_SUCCESS,
            payload: response
        });
        history.push('/customer');
    };
    
    export const handleLoginFail = (dispatch: Dispatch<LoginFail>) => {
        dispatch({
            type: LoginConstants.LOGIN_FAILURE
        });
    };

    export const  login=(username:string, password:string) => (dispatch: any) => {
        handleUserLogin(dispatch);
        try {
            const response :(any) =  loginService.login(username, password);
            handleLoginSuccess(dispatch, response.data);
        } catch (e) {
            handleLoginFail(dispatch);
        }
            }
    
            function logout() {
                loginService.logout();
                return { type: LoginConstants.LOGOUT };
            }