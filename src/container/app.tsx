import React from 'react';
import {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginForm } from '../pages/login';
import { CustomerCreateForm } from '../pages/customer/create';
import { CustomerList } from '../pages/customer/customerlist';

export const App=()=> 
    <div className="jumbotron">
    <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
                <Switch>
                    <Route path={'/'} exact component={LoginForm} />
                    <Route path={'/customer'} exact component={CustomerCreateForm} />
                    <Route path={'/customerlist'} exact component={CustomerList} />
                </Switch>
               
        </div>
    </div>
</div>
;