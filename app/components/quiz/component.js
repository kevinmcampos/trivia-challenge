import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import { styles } from './styles';
import { primaryDark } from '../../styles/colors';

import { resetToQuestionIndex } from '../navigator/actions';

export default class Quiz extends React.Component {

    constructor(props) {
        super(props);
    }

    async _doAnswer(option) {
        await this.props.doAnswer(this.props.questionIndex, option);

        if (this.props.hasNextQuestion) {
            this.props.navigation.dispatch(resetToQuestionIndex(this.props.questionIndex + 1));
        } else {
            console.warn('// TODO: Display results');
        }
    }

    render() {
        return (
            <View style={styles.Quiz}>
                <View style={styles.QuizStatusBar}>
                    <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor={primaryDark} />
                </View>

                <View>
                    <Text style={styles.QuizTextCategory}>{this.props.question.category}</Text>
                </View>

                <View style={styles.QuizQuestionBox}>
                    <Text style={styles.QuizTextQuestion}>{this.props.question.question}</Text>
                </View>

                <Text style={styles.QuizTextQuestionIndex}>{I18n.t('quiz_question_counter', { current: this.props.questionIndex + 1, total: this.props.numberOfQuestions })}</Text>

                <View style={[styles.QuizAnswerButtonsContainer]}>
                    <View style={styles.QuizAnswerContainer}>

                        <TouchableOpacity style={styles.QuizButtonFalse}
                            onPress={() => this._doAnswer(false)}>

                            <Text style={styles.QuizButtonText}>
                                {I18n.t('quiz_false_answer')}
                            </Text>

                        </TouchableOpacity>

                        <View style={styles.QuizAnswerSeparator} />

                        <TouchableOpacity style={styles.QuizButtonTrue}
                            onPress={() => this._doAnswer(true)}>

                            <Text style={styles.QuizButtonText}>
                                {I18n.t('quiz_true_answer')}
                            </Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

Quiz.propTypes = {
    navigation: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    hasNextQuestion: PropTypes.bool.isRequired,
    questionIndex: PropTypes.number.isRequired,
    numberOfQuestions: PropTypes.number.isRequired,
    doAnswer: PropTypes.func.isRequired,
};
