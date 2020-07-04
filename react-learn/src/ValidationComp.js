import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class ValidationComp extends Component {
    //先混合属性
    static defaultProps = {
        a: 1
    }
    //再调用相应的函数进行验证
    static propTypes = {
        a: PropTypes.any.isRequired,

    }

    render() {
        return (
            <div>
                {this.props.a}
            </div>
        )
    }
}
