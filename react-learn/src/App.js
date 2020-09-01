import React, { Children } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import qs from "query-string"
function A(props) {
    return <div>
        <h1>组件A</h1>
        <button onClick={() => {
            props.history.push("/b");
        }}>跳转到/b</button>
    </div>
}

function B() {
    return <h1>组件B</h1>
}

function NotFound() {
    return <h1>找不到页面</h1>
}


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/a" component={A} ></Route>
                <Route path="/b" component={B} ></Route>
                <Route component={NotFound} />
            </Switch>
        </Router>

    )
}


