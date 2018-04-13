import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { doAnswer } from '../../actions/quiz';

import Quiz from './component';

function mapStateToProps(state, ownProps) {
    const quiz = state.quiz.quiz;
    const numberOfQuestions = quiz.length;
    const question = state.quiz.quiz[ownProps.questionIndex];
    const hasNextQuestion = quiz.length > ownProps.questionIndex + 1;

    const props = {
        question,
        numberOfQuestions,
        hasNextQuestion,
    };

    return props;
}

function mapDispatchToProps(dispatch) {
    const actions = {
        doAnswer,
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
