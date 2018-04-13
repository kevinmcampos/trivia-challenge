import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getQuiz } from '../../actions/quiz';

import Home from './component';

function mapStateToProps(state) {
    const props = {
        isLoadingQuiz: state.quiz.isLoadingQuiz,
        quizError: state.quiz.quizError,
    };
    return props;
}

function mapDispatchToProps(dispatch) {
    const actions = {
        getQuiz,
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
