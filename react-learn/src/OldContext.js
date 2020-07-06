import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildA(props, context) {
    return <div>
        <h1>ChildA</h1>
        <h2>a: {context.a}, b: {context.b}</h2>
        <ChildB />
    </div>
}
ChildA.contextTypes = {
    a: PropTypes.number
}

class ChildB extends React.Component {
    /**
     * 声明需要使用那些上下文中的数据
     */
    static contextTypes = {
        a: PropTypes.number,
        onChangeA: PropTypes.func
    }

    constructor(props, context) {
        super(props, context)
        console.log(this.context)
    }

    render() {
        return <p>
            ChildB: {this.context.a}
            <button onClick={() => {
                this.context.onChangeA(this.context.a + 1)
            }}>child click</button>
        </p>
    }
}

export default class OldContext extends Component {
    /**
     * 约束上下文中数据的类型
     */
    static childContextTypes = {
        a: PropTypes.number,
        b: PropTypes.string.isRequired,
        onChangeA: PropTypes.func
    }

    state = {
        a: 123,
        b: "123456"
    }

    /**
     * 得到上下文中的数据
     */
    getChildContext() {
        console.log('获取上下文中的对象')
        return {
            a: this.state.a,
            b: this.state.b,
            onChangeA: (newA) => {
                this.setState({
                    a: newA
                })
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1,
                        b: this.state.b + "a"
                    })
                }}>click</button>
                <ChildA />
            </div>
        )
    }
}
