import * as actionTypes from "../action/action-type"

export default function reducer(state = 10, action) {
    switch (action.type) {
        case actionTypes.Increase:
            return state + 1;
        case actionTypes.Decrease:
            return state - 1;
        case actionTypes.Set:
            return action.payload;
        default:
            return state;
    }
}