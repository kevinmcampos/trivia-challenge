import React from 'react';
import { Provider } from 'react-redux';

import Store from '../../store/index';
import Home from '../home/container';

export default class Application extends React.Component {

    render () {        
        return (
            <Provider store={Store}>
                <Home/>
            </Provider>
        );
    }
}
