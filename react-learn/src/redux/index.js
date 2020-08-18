import { createStore, applyMiddleware } from "redux"

import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk';


function reducer(state = 10, action) {
    switch(action.type) {
        case 'abc':
            return state + 1;
        default: 
        return state
    }
}
const store = createStore(reducer, applyMiddleware(ReduxThunk,logger));
store.dispatch((dispatch,getState,extra) => {
    console.log(getState())
    setTimeout(() => {
        dispatch({type: 'abc'})
        console.log(getState())
    },1000)
})
