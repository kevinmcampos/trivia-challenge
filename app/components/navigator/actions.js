import { NavigationActions } from 'react-navigation';

export const resetToQuestionIndex = questionIndex => NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: 'quiz',
            params: {
                questionIndex,
            },
        }),
    ],
});

export const resetToResults = () => NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'results' }),
    ],
});

export const resetToHome = () => NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'home' }),
    ],
});
