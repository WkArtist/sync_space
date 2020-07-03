import React, { Component } from 'react'

export default class App extends Component {
    state = {
        val: "123",
        checked: true,
        loves: ["足球","篮球","音乐","其他"],
        chooseLoves: ["足球"],
        select: '西安'
    }

    render() {
        const checkboxes = this.state.loves.map(it => {
            return <label key={it}><input type="checkbox" checked={this.state.chooseLoves.includes(it)} onChange={
                e => {
                    if (e.target.checked) {
                        this.setState({
                            chooseLoves: [...this.state.chooseLoves, it]
                        })
                    } else {
                        this.setState({
                            chooseLoves: this.state.chooseLoves.filter(l => l!==it)
                        })
                    }
                }
            }/></label>
        })
        return (
            <div>
                <h1>val: {this.state.val}</h1>
                <input type="text" value={this.state.val} onChange={e=> {
                    this.setState({
                        val: e.target.value
                    })
                }}/>
                <h1>checked: {this.state.checked.toString()}</h1>
                <p>
                  <input type="checkbox" checked={this.state.checked} onChange={
                      e => {
                          this.setState({
                            checked: e.target.checked
                          })
                      }
                  }/>
                </p>
                <h1>爱好：{this.state.chooseLoves.map(e => <span key={e}>{e} </span>)}</h1>
                <p> 
                    {checkboxes}
                </p>

                <p>选择城市：{this.state.select}</p>
                <select value={this.state.select} onChange={
                    e => {
                        this.setState({
                            select: e.target.value
                        })
                    }
                }>
                    <option value="北京">北京</option>
                    <option value="上海">上海</option>
                    <option value="西安">西安</option>
                </select>
                
            </div>
        )
    }
}
