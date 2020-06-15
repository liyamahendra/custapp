import React, {ChangeEvent, FormEvent, useState, useEffect} from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Field, FieldProps, Formik, FormikErrors, FormikProps } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/login.action';

interface Props {
}
 


export const LoginForm: React.FC<Props> = ({}) => {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
               // console.log(name);
               dispatch(login(username, password))
            };

            const handleChange= (e: ChangeEvent<HTMLInputElement>) => {
               
                const { name, value } = e.target;
                 setInputs(inputs => ({ ...inputs, [name]: value }));
            }

        return (
            <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                       
                        Login
                    </button>
                </div>
            </form>
        </div>
        )
}

