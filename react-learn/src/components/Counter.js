import React from 'react'
import { connect } from "react-redux"

const Counter = function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onAsyncDecrease}>异步减</button>
                <button onClick={props.onDecrease}>减</button>
                <button onClick={props.onIncrease}>加</button>
                <button onClick={props.onAsyncIncrease}>异步加</button>
            </p>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        number: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAsyncDecrease() {
            dispatch(asyncDecrease())
        },
        onDecrease() {
            dispatch(decrease())
        },
        onIncrease() {
            dispatch(increase())
        },
        onAsyncDecrease() {
            dispatch(onAsyncIncrease())
        }
    }
}

const creators = {
    onAsyncDecrease: asyncDecrease,
    onDecrease: decrease,
    onIncrease: increase,
    onAsyncDecrease: onAsyncIncrease
}
export default connect(mapStateToProps, creators)(Counter)