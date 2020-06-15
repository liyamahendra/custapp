import React, {ChangeEvent, FormEvent, useState, useEffect} from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Field, FieldProps, Formik, FormikErrors, FormikProps } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { addCustomer } from '../../redux/actions/customer.action';
import { Customer } from '../../redux/model/customer';

interface Props {
}

export const CustomerCreateForm: React.FC<Props> = ({}) => {
    const [inputs, setInputs] = useState({
        id: 0,
        first_name: '',
        last_name: '',
        dob: '',
        phone: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const { id,first_name,last_name,dob,phone } = inputs;
    
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
               // console.log(name);
               var customerData:Customer={id,first_name,last_name,dob,phone};
              dispatch(addCustomer(customerData));
            };

            const handleChange= (e: ChangeEvent<HTMLInputElement>) => {
               
                const { name, value } = e.target;
                 setInputs(inputs => ({ ...inputs, [name]: value }));
            }

        return (
            <div className="col-lg-8 offset-lg-2">
            <h2>Create</h2>
            <form id={"create-customer-form"} onSubmit={handleSubmit} noValidate={true}>
                        <div className="form-group col-md-12">
                            <label htmlFor="first_name"> First Name </label>
                            <input type="text" id="first_name" onChange={(e) => handleChange(e)} name="first_name"
                             className="form-control" placeholder="Enter customer's first name" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="last_name"> Last Name </label>
                            <input type="text" id="last_name" onChange={(e) => handleChange(e)} name="last_name" 
                            className="form-control" placeholder="Enter customer's last name" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="phone"> Phone </label>
                            <input type="text" id="phone" onChange={(e) => handleChange(e)} name="phone"
                             className="form-control" placeholder="Enter customer's phone number" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="address"> DOB </label>
                            <input type="text" id="dov" onChange={(e) => handleChange(e)} name="dob" 
                            className="form-control" placeholder="Enter customer's date of birth" />
                        </div>

                       

                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit">
                                Create Customer
              </button>
                          
                        </div>
                    </form>
        </div>
        )
}

