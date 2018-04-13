import React from 'react';
import Application from './app/components/application/component';

import I18n from 'react-native-i18n';
import loadTranslations from './app/locales/i18n';
loadTranslations(I18n);

export default class App extends React.Component {
    render() {
        return (
            <Application />
        );
    }
}
