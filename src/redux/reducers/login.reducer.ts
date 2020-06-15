import { LoginConstants } from "../constants/login.constants";

const initialState = {
    user: {},
    loading: false,
    error: null
};

export const LoginReducer:any=(state:any=initialState,action:any) =>{
    switch (action.type) {
        case LoginConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    default:
      return state
    }
};
