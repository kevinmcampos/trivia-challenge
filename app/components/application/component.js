import React from 'react';
import { Provider } from 'react-redux';

import Store from '../../store/index';
import { Navigator } from '../navigator/component';

export default class Application extends React.Component {

    render () {
        return (
            <Provider store={Store}>
                <Navigator />
            </Provider>
        );
    }
}
