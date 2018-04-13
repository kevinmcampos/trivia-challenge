import I18n from 'react-native-i18n';
import he from 'he';

import * as types from '../constants/quiz';
import { mountURLForContext } from '../utils/mount-url';

function parseQuestion(questionJson) {
    return {
        category: questionJson.category,
        type: questionJson.category,
        difficulty: questionJson.difficulty,
        question: he.decode(questionJson.question),
        correctAnswer: questionJson.correct_answer === 'True',
        userAnswer: null,
    };
}

function parseQuiz(quizJson) {
    return quizJson.map(question => {
        return parseQuestion(question);
    });
}

const getQuiz = successCallback => {
    return async dispatch => {
        
        try {
            const TRUE_OR_FALSE_URL = mountURLForContext('api.php?amount=10&difficulty=hard&type=boolean');

            dispatch(gettingQuiz());
            console.log(`[QUIZ] Requesting to ${TRUE_OR_FALSE_URL}`);
            const response = await fetch(TRUE_OR_FALSE_URL);

            if (response.status === 200) {
                const responseJson = await response.json();
                const quizJson = responseJson.results;
                const quiz = parseQuiz(quizJson);
                dispatch(getQuizSuccess(quiz));
                successCallback();
            } else {
                throw new Error('Unexpected status code');
            }
        } catch (error) {
            console.warn(`[QUIZ] getQuiz - Error: ${error}`);
            const errorMessage = I18n.t('generic_network_error');
            dispatch(getQuizFailed(errorMessage));
        }
    };
};

function gettingQuiz() {
    return {
        type: types.QUIZ_GETTING_QUIZ,
    };
}

function getQuizSuccess(quiz) {
    return {
        type: types.QUIZ_GET_QUIZ_SUCCESS,
        quiz,
    };
}

function getQuizFailed(errorMessage = undefined) {
    return {
        type: types.QUIZ_GET_QUIZ_FAILED,
        errorMessage,
    };
}

const doAnswer = (questionIndex, userAnswer) => {
    return async dispatch => {
        dispatch(saveQuestionAnswer(questionIndex, userAnswer));
    };
};

function saveQuestionAnswer(questionIndex, userAnswer) {
    return {
        type: types.QUIZ_SAVE_QUESTION_ANSWER,
        questionIndex,
        userAnswer,
    };
}

export {
    getQuiz,
    doAnswer,
};
