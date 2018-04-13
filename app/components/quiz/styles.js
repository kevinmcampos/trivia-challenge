import {
    StyleSheet,
    Platform,
} from 'react-native';

import colors, { primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({

    Quiz: {
        flex: 1,
        backgroundColor: colors['grey-lighten-2'],
    },
    
    QuizStatusBar: {
        height: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: primaryColor,
    },

    QuizTextCategory: {
        fontSize: 22,
        marginTop: 40,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    QuizQuestionBox: {
        flex: 2,
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#000',
        marginHorizontal: 32,
        marginTop: 32,
        marginBottom: 16,
    },

    QuizTextQuestion: {
        fontSize: 24,
        margin: 16,
        textAlign: 'center',
    },

    QuizTextQuestionIndex: {
        fontSize: 22,
        textAlign: 'center',
    },

    QuizAnswerContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
    },

    QuizAnswerButtonsContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },

    QuizButtonFalse: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: 'red',
    },

    QuizAnswerSeparator: {
        width: 16,
    },

    QuizButtonTrue: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: 'green',
    },

    QuizButtonText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 22,
    },

});

export { styles };
