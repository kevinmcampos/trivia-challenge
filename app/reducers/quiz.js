import * as types from '../constants/quiz';

const initialState = {
    isLoadingQuiz: false,
    quiz: [],
    quizError: null,
};

function gettingQuiz(state) {
    return {
        ...state,
        isLoadingQuiz: true,
        quiz: [],
    };
}

function getQuizSuccess(state, action) {
    return {
        ...state,
        isLoadingQuiz: false,
        quiz: action.quiz,
        quizError: null,
    };
}

function getQuizFailed(state, action) {
    return {
        ...state,
        isLoadingQuiz: false,
        quiz: [],
        quizError: action.errorMessage,
    };
}

function saveQuestionAnswer(state, action) {
    const newQuiz = [...state.quiz];
    newQuiz[action.questionIndex].userAnswer = action.userAnswer;
    
    return {
        ...state,
        quiz: newQuiz,
    };
}

const ACTION_REDUCER_MAP = {
    [types.QUIZ_GETTING_QUIZ]: gettingQuiz,
    [types.QUIZ_GET_QUIZ_SUCCESS]: getQuizSuccess,
    [types.QUIZ_GET_QUIZ_FAILED]: getQuizFailed,
    [types.QUIZ_SAVE_QUESTION_ANSWER]: saveQuestionAnswer,
};

export default function (state = initialState, action = {}) {
    const reducerFunction = ACTION_REDUCER_MAP[action.type];
    if (typeof reducerFunction === 'function') {
        return reducerFunction(state, action);
    }
    return state;
}
