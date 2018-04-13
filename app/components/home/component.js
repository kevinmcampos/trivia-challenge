import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    ActivityIndicator,
    Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import { styles } from './styles';
import { primaryDark } from '../../styles/colors';

import { resetToQuestionIndex } from '../navigator/actions';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    _doBeginTrivia() {
        const onSucessCallback = () => {
            const FIRST_QUESTION_INDEX = 0;
            this.props.navigation.dispatch(resetToQuestionIndex(FIRST_QUESTION_INDEX));
        };

        this.props.getQuiz(onSucessCallback);
    }

    render() {
        const activityIndicator = this.props.isLoadingQuiz ?
            (
                <ActivityIndicator style={styles.Spinner} />
            ) : null;

        const errorTextComponent = this.props.quizError ?
            (
                < Text style={styles.HomeErrorMessage} >
                    {this.props.quizError}
                </Text >
            ) : null;

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

                    {errorTextComponent}

                    <TouchableOpacity style={styles.HomeButton}
                        disabled={this.props.isLoadingQuiz}
                        onPress={() => this._doBeginTrivia()}>

                        <Text style={styles.HomeButtonText}>
                            {I18n.t('home_begin')}
                        </Text>

                        {activityIndicator}

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Home.propTypes = {
    navigation: PropTypes.object.isRequired,
    isLoadingQuiz: PropTypes.bool.isRequired,
    quizError: PropTypes.string,
    getQuiz: PropTypes.func.isRequired,
};
