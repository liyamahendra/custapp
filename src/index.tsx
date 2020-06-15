import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Router } from "react-router";
import './index.css';
import { App} from './container/container';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { history } from './redux/helper/history';

ReactDOM.render(
  <Provider store={store}>
     <Router history={history}>
       <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
