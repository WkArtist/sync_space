export const actionTypes = {
    setStudentAndTotal: Symbol("setStudentAndTotal"),
    setIsLoading: Symbol("setIsLoading")
}

export function setStudentAndTotal(arr, total) {
    return {
        type: actionTypes.setStudentAndTotal,
        payload: {
            datas: arr,
            total
        }
    }
}

export function setIsLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

export function fetchStudents() {
    return async function (dispatch, getState) {
        dispatch(setIsLoading(true))
        const condition = getState().student.condition
        const resp = await fetch(condition)
        dispatch(setStudentAndTotal(resp.datas, resp.cont))
        dispatch(setIsLoading(false))
    }
}