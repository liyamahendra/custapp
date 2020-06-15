import { CustomerConstants } from "../constants/customer.constants";
import {Customer} from '../model/customer';


const initialState = {
    customer: Customer,
    loading: false,
    error: null
};

export const CustomerReducer:any=(state:any=initialState,action:any) =>{
    switch (action.type) {
        case CustomerConstants.List:
        case CustomerConstants.Add:
        case CustomerConstants.Edit:
        case CustomerConstants.Delete:
            return { ...state, loading: true };

        case CustomerConstants.Add_Success:
            const { id } = action.payload;
            return {
                ...state,
                items: { ...state.items, [id]: action.payload },
                loading: false
            };
        case CustomerConstants.Add_Fail:
        case CustomerConstants.ListFail:
            return { ...state, loading: false };
        case CustomerConstants.ListSuccess:
            return { ...state, loading: false,items:action.payload };
        default:
            return state
    }
};
