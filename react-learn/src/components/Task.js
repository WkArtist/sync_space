import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import './Task.css'

export default class Task extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isFinish: PropTypes.bool.isRequired
    }
    render() {
        console.log("Task")
        return (
            <li className={this.props.isFinish ? "finish" : ""}>{this.props.name}</li>
        )
    }
}
