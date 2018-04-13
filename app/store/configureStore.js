import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

export default function configureStore(initialState = undefined) {
    const enhancer = compose(
        applyMiddleware(thunk)
    );
    return createStore(rootReducer, initialState, enhancer);
}
