import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({

    QuestionResultItem: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
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
});

export { styles };
