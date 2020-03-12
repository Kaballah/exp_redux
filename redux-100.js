import { createStore } from "redux";

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: action.resetBy
            }
        case 'SET':
            return {
                count: action.setBy
            }
        default: 
        return state;
    }
}

const store = createStore(countReducer)

store.subscribe((() => {
    console.log(store.getState())
}))

// Actions -> an object that gets sent to the store...of which we use a dispatch option

// Action creator -> function that returns an action option

// Increment
// const incrementCount = (payload = {}) => {
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     }
// }

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// Reset
const resetCount = (payload = {}) => {
    return {
        type: 'RESET',
        resetBy: typeof payload.resetBy === 'number' ? payload.resetBy : 0
    }
}

store.dispatch(resetCount({ resetBy: 0 }));

// Decrement
// const decrementCount = (payload = {}) => {
//     return {
//         type: 'DECREMENT',
//         decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
//     }
// }

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(decrementCount());

// Set
// const setCount = (payload = {}) => {
//     return {
//         type: 'SET',
//         setBy: typeof payload.setBy === 'number' ? payload.setBy : 150
//     }
// }

const setCount = ({ setBy = 150 } = {}) => {
    return {
        type: 'SET',
        setBy
    }
}

store.dispatch(setCount({ setBy:150 }))
