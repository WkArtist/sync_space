import React, { Component } from 'react'
import TaskList from './TaskList'

export default class TaskContainer extends Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        const ts = [];
        for (let i = 1; i <= 10; i++) {
            ts.push({
                name: `任务${i}`,
                isFinish: Math.random() > 0.5
            })
        }
        this.setState({
            tasks: ts
        })
    }

    render() {
        console.log("TaskContainer Render")
        return (
            <div>
                <TaskList tasks={this.state.tasks} />
            </div>
        )
    }
}
