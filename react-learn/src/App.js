import React, { Component } from 'react'
import Test from './Test'
import { A, B } from './components/Comps'
import WithLog from './HOC/withLog'
const LogA = WithLog(A)
const LogB = WithLog(B)


export default class App extends Component {

    render() {
        console.log(LogA)
        return <div>
            <LogA a={1} />
            <LogB />
            <Test />
        </div>
    }
}
