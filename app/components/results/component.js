import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    FlatList,
    Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import { styles } from './styles';
import { primaryDark } from '../../styles/colors';

import QuestionResultItem from '../result-question/component';
import { resetToHome } from '../navigator/actions';

export default class Results extends React.Component {

    constructor(props) {
        super(props);
    }

    _doPlayAgain() {
        this.props.navigation.dispatch(resetToHome());
    }

    render() {
        return (
            <View style={styles.Results}>

                <View style={styles.ResultStatusBar}>
                    <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor={primaryDark} />
                </View>
                <View style={styles.ResultsScoreContainer}>
                    <Text style={styles.ResultsScoreText}>
                        {I18n.t('results_scored', { scored: this.props.numberOfQuestionsScored, total: this.props.numberOfQuestions })}
                    </Text>
                </View>

                <View style={styles.ResultsQuestionsHeader}>
                    <View style={styles.QuestionResultItemText} />
                    <View style={styles.QuestionResultItemBox}>
                        <Text style={styles.QuestionResultItemBoxText}>
                            {I18n.t('results_your_answer')}
                        </Text>
                    </View>
                    <View style={styles.QuestionResultItemBox}>
                        <Text style={styles.QuestionResultItemBoxText}>
                            {I18n.t('results_correct_answer')}
                        </Text>
                    </View>
                </View>

                <View style={styles.ResultListContainer}>
                    <FlatList
                        data={this.props.quiz}
                        keyExtractor={(item, index) => String(index)}
                        renderItem={({ item }) => <QuestionResultItem question={item} />}
                    />
                </View>

                <View>

                    <TouchableOpacity style={styles.ResultButton}
                        onPress={() => this._doPlayAgain()}>

                        <Text style={styles.ResultButtonText}>
                            {I18n.t('results_play_again')}
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Results.propTypes = {
    navigation: PropTypes.object.isRequired,
    quiz: PropTypes.array.isRequired,
    numberOfQuestionsScored: PropTypes.number.isRequired,
    numberOfQuestions: PropTypes.number.isRequired,
};
