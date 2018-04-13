import {
    StyleSheet,
    Platform,
} from 'react-native';

import colors, { primaryColor, secondaryColor } from '../../styles/colors';

const styles = StyleSheet.create({

    Results: {
        flex: 1,
        backgroundColor: colors['grey-lighten-2'],
    },
    
    ResultStatusBar: {
        height: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: primaryColor,
    },
    
    ResultsScoreContainer: {
        padding: 30,
    },

    ResultsScoreText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    ResultsQuestionsHeader: {
        flexDirection: 'row',
        marginHorizontal: 16,
        paddingVertical: 8,
    },

    QuestionResultItemText: {
        flex: 1,
        paddingRight: 10,
    },

    QuestionResultItemBox: {
        width: 60,
        justifyContent: 'center',
    },

    QuestionResultItemBoxText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },

    ResultListContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    ResultButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
        margin: 16,
        borderRadius: 12,
        backgroundColor: secondaryColor,
    },

    ResultButtonText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 22,
    },
});

export { styles };
