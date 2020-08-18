
import { actionTypes } from "../../action/student/searchResult"

const initialState = {
    datas: [],
    total: 0,
    isLoading: false
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.setIsLoading:
            return {
                ...state,
                isLoading: payload
            }
        case actionTypes.setStudentAndTotal:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}