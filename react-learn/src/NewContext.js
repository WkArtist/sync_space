import React, { Component } from 'react'

const ctx = React.createContext()


export default class NewContext extends Component {
    state = {
        a: 0,
        b: "abc",
        changeA: (newA) => {
            this.setState({
                a: newA
            })
        }
    }

    render() {
        //上下文生产者
        return (
            <ctx.Provider value={this.state}>
                <div>
                    <ChildA></ChildA>
                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>a+1</button>
                </div>
            </ctx.Provider>
        )
    }
}


function ChildA(props) {
    return <div>
        <h1>ChildA</h1>
        <h2>
            <ctx.Consumer>
                {value => <>{value.a}, {value.b}</>}
            </ctx.Consumer>
        </h2>
        <ChildB></ChildB>
    </div>
}

class ChildB extends React.Component {
    render() {
        return <p>
            <ctx.Consumer>
                {value => {
                    return (
                        <>childB, 来自于上下文的数据：a: {value.a}, b: {value.b}
                            <button onClick={() => {
                                value.changeA(value.a + 2)
                            }}>a+2</button></>
                    )
                }}
            </ctx.Consumer>
        </p>
    }
}