import store from './index'
import { change } from "./action/student/searchCondition"
import { setIsLoading, setStudentAndTotal, fetchStudents } from "./action/student/searchResult"

// store.dispatch(change({
//     key: "abc",
//     page: 2
// }))
// store.dispatch(setIsLoading(true))

store.dispatch(fetchStudents())