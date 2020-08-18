import { createStore, combineReducers, bindActionCreators, applyMiddleware } from "redux"
// import reducer from './reducer'
import * as numberActions from "./action/number-action"
import { createAddUserAction } from './action/usersAction'
import { v4 as uuid } from 'uuid'
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
// store.dispatch(createAddUserAction({
//     id: uuid(),
//     name: "abc",
//     age: 10
// }))

