import {
    StyleSheet,
    Platform,
} from 'react-native';

import colors, { primaryColor, secondaryColor } from '../../styles/colors';

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
        backgroundColor: secondaryColor,
        borderRadius: 12,
        paddingVertical: 16,
    },

    HomeButtonText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 22,
    },
});

export { styles };
