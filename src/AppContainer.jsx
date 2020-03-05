import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import App from './App';

import {getTasks} from './redux/reducer';

const AppContainer = props => {
    useEffect( () => { props.getTasks() }, []);
    
    return <App state={props.state} />
}

let mapStateToProps = state => {
    return {
        state: state.reducer
    }
};

export default connect( mapStateToProps, {getTasks} )(AppContainer);