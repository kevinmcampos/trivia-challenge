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
