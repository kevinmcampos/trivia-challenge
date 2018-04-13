import {
    StyleSheet,
    Platform,
} from 'react-native';

import colors, { primaryColor, primaryErrorColor, secondaryColor } from '../../styles/colors';

const styles = StyleSheet.create({

    Home: {
        flex: 1,
        backgroundColor: colors['grey-lighten-2'],
    },
    
    HomeStatusBar: {
        height: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: primaryColor,
    },

    HomeContentContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },

    HomeTextTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    HomeTextBody: {
        fontSize: 22,
        textAlign: 'center',
    },

    HomeButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: secondaryColor,
    },

    HomeButtonText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 22,
    },

    HomeErrorMessage: {
        padding: 16,
        textAlign: 'center',
        color: primaryErrorColor,
        fontSize: 16,
        minHeight: 36,
    },

    Spinner: {
        marginLeft: 20,
    },
});

export { styles };
