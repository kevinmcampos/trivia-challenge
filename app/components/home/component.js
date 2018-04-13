import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Platform,
} from 'react-native';
import I18n from 'react-native-i18n';

import { styles } from './styles';
import { primaryDark } from '../../styles/colors';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    _doBeginTrivia() {
        // TODO: Begin!
    }

    render() {
        return (
            <View style={styles.Home}>
                <View style={styles.HomeStatusBar}>
                    <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor={primaryDark} />
                </View>
                <View style={styles.HomeContentContainer}>
                    <Text style={styles.HomeTextTitle}>{I18n.t('home_title')}</Text>
                </View>

                <View style={[styles.HomeContentContainer]}>
                    <Text style={styles.HomeTextBody}>{I18n.t('home_introduction')}</Text>
                </View>

                <View style={styles.HomeContentContainer}>
                    <Text style={styles.HomeTextBody}>{I18n.t('home_can_you_score_100')}</Text>
                </View>

                <View style={styles.HomeContentContainer}>
                    <TouchableOpacity style={styles.HomeButton}
                        onPress={() => this._doBeginTrivia()}>

                        <Text style={styles.HomeButtonText}>
                            {I18n.t('home_begin')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Home.propTypes = {
};
