import { CustomerConstants } from "../constants/customer.constants";
import { Dispatch } from "react";
import { loginService } from "../../services";
import { history } from "../helper/history";
import { Customer } from "../model/customer";
import { customerService } from "../../services/customer.service";

interface Add {
    type: CustomerConstants.Add;
}

interface AddSuccess {
    type: CustomerConstants.Add_Success;
    payload: Customer;
}

interface AddFail {
    type: CustomerConstants.Add_Fail;
}

interface List {
    type: CustomerConstants.List;
}

interface ListSuccess {
    type: CustomerConstants.ListSuccess;
    payload: Customer[];
}

interface ListFail {
    type: CustomerConstants.ListFail;
}


export type CustomerAction =
    | Add
    | AddSuccess
    | AddFail
    |List
    ;


    export const addCustomer = (customer: Customer) => (dispatch: any) => {
        handleAddCustomer(dispatch);
        try {
            const response :(any) =  customerService.create(customer);
            handleAddCustomerSuccess(dispatch, response);
        } catch (e) {
            handleAddCustomerFail(dispatch);
        }
        history.push('/customer');
    };
    
    const handleAddCustomer = (dispatch: Dispatch<Add>) => {
        dispatch({ type: CustomerConstants.Add, });
    };
    
    const handleAddCustomerSuccess = (
        dispatch: Dispatch<AddSuccess>,
        response: Customer
    ) => {
        dispatch({ type: CustomerConstants.Add_Success, payload: response });
    };
    
    const handleAddCustomerFail = (dispatch: Dispatch<AddFail>) => {
        dispatch({ type: CustomerConstants.Add_Fail });
    };
    

    /************************* */
    export const customerList = (id: number) => (dispatch: any) => {
        handleCustomerList(dispatch);
        try {
            const response :(any) =  customerService.list(id);
            handleCustomerListSuccess(dispatch, response);
           
        } catch (e) {
            handleCustomerListFail(dispatch);
        }
    };
    
    export const handleCustomerList = (dispatch: Dispatch<List>) => {
        dispatch({ type: CustomerConstants.List });
    };
    
    const handleCustomerListSuccess = (
        dispatch: Dispatch<ListSuccess>,
        response: Customer[]
    ) => {
        dispatch({
            type: CustomerConstants.ListSuccess,
            payload: response
        });
        history.push('/customerlist');
    };
    
    const handleCustomerListFail = (dispatch: Dispatch<ListFail>) => {
        dispatch({
            type: CustomerConstants.ListFail
        });
    };
    