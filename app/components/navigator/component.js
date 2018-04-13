import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../home/container';
import Quiz from '../quiz/container';
import Results from '../results/container';

// Disable lint validation for props due it bug on object descontruction.
/* eslint react/prop-types: 0 */

const HomeScreen = ({ navigation }) => (
    <Home navigation={navigation} />
);

const QuizScreen = ({ navigation }) => (
    <Quiz navigation={navigation}
        questionIndex={navigation.state.params.questionIndex} />
);

const ResultsScreen = ({ navigation }) => (
    <Results navigation={navigation} />
);

export const Navigator = StackNavigator(
    {
        'home': { screen: HomeScreen },
        'quiz': { screen: QuizScreen },
        'results': { screen: ResultsScreen },
    },
    {
        initialRouteName: 'home',
        headerMode: 'screen',
        navigationOptions: {
            header: null,
        },
    }
);
