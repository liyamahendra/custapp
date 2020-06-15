import React, {ChangeEvent, FormEvent, useState, useEffect} from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Field, FieldProps, Formik, FormikErrors, FormikProps } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { addCustomer,customerList } from '../../redux/actions/customer.action';
import { Customer, ICustomers } from '../../redux/model/customer';

interface Props {
}

export const CustomerList: React.FC<Props> = ({}) => {
    const [customers, setCustomer] = useState([])
    const dispatch = useDispatch();
    const componentDidMount = () => {
        dispatch(customerList(0))
    };
    

        return (
            <div className="col-lg-8 offset-lg-2">
            <h2>Create</h2>
           {customers.length}
        </div>
        )
}

