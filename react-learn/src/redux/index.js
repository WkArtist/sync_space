import { createStore, bindActionCreators } from "redux"
import reducer from './reducer'
import * as numberActions from "./action/number-action"
import { createAddUserAction } from './action/usersAction'
import { v4 as uuid } from 'uuid'

const store = createStore(reducer);
//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
// const boundActions = bindActionCreators(numberActions, store.dispatch)

console.log(store.getState())
// store.dispatch(numberActions.getIncreaseAction());
// store.dispatch(numberActions.getSetAction(6))
// boundActions.getSetAction(6)
// console.log(store.getState())// 得到仓库中当前的数据

const unlisten = store.subscribe(() => {
    console.log(store.getState())
})
unlisten();//取消监听

store.dispatch(createAddUserAction({
    id: uuid(),
    name: "abc",
    age: 10
}))
// console.log(store.getState())