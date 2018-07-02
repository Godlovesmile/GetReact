import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function increment () {
    return { type: 'INCREMENT' };
}
function decrement () {
    return { type: 'DECREMENT' };
}
function incrementIfOdd () {
    return (dispatch, getState) => {
        const value = getState();
        if (value % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
};

function incrementAsync (delay = 100) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    }
}

function counter (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECRMENT':
            return state - 1;
        default: 
            return state;
    }   
}

const store = createStore(counter, applyMiddleware(thunk));

let currentValue = store.getState();
store.subscribe(() => {
    const previousValue = currentValue;
    currentValue = store.getState();
    console.log('pre state: ', previousValue, 'next state: ', currentValue);
});
store.dispatch(increment());