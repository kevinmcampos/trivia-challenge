import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Results from './component';

function mapStateToProps(state) {
    const quiz = state.quiz.quiz;
    const numberOfQuestions = quiz.length;
    const questionsScored = quiz.filter(question => {
        return question.userAnswer === question.correctAnswer;
    });

    const props = {
        quiz: state.quiz.quiz,
        numberOfQuestionsScored: questionsScored.length, 
        numberOfQuestions,
    };
    return props;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
