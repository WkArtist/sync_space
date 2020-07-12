import React, { Component } from 'react'
import { Provider } from './formContext'


export default class Form extends Component {

    state = {
        formData: {},
        changeFormData: (name, val) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: val
                }
            })
        }
    }

    render() {
        return (
            <Provider value={this.state}>

            </Provider>
        )
    }
}
