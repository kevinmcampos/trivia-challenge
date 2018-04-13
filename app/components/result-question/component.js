import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export default class QuestionResultItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const isAnsweredRight = 
            this.props.question.userAnswer === this.props.question.correctAnswer;
        const fontColor = isAnsweredRight ? 'green' : 'red';
        
        return (
            <View style={styles.QuestionResultItem}>
                <Text style={[styles.QuestionResultItemText, {color: fontColor}]}>
                    {this.props.question.question}
                </Text>
                <View style={styles.QuestionResultItemBox}>
                    <Text style={[styles.QuestionResultItemBoxText, {color: fontColor}]}>
                        {this.props.question.correctAnswer === true ? 'TRUE' : 'FALSE'}
                    </Text>
                </View>
                <View style={styles.QuestionResultItemBox}>
                    <Text style={[styles.QuestionResultItemBoxText, {color: fontColor}]}>
                        {this.props.question.userAnswer === true ? 'TRUE' : 'FALSE'}
                    </Text>
                </View>
            </View>
        );
    }
}

QuestionResultItem.propTypes = {
    question: PropTypes.object.isRequired,
};
