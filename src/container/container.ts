import { compose } from "redux";
import {App as AppContainer} from './app'
import { connect } from "react-redux";

const mapStateToProps=(store:any, props:any)=> {
    return {
        user: store.user,
    };
}

export const App=compose(connect(mapStateToProps))(AppContainer);