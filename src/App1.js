import React, { Component } from 'react'
import './App.css'
import Counter from './Components/Counter'
import AddItem from './Components/AddItem'

export default class App1 extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: "Bonjour"
  //   }
  // }

  state = {
    name: "Bonjour",
    count: 0,
    arr: [1, 2, 3]
  }

  add=(x)=>{
    this.setState({
      arr: [...this.state.arr, x]
    })
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className='App'>
        {/* <button onClick={() => this.setState({ show: true })} >Switch</button>
        <h1>{this.state.name}</h1>
        <button onClick={this.increment} >+</button> */}
        {/* <h2>{this.state.count}</h2> */}
        {/* <Counter count={this.state.count} />
        <button onClick={this.decrement}>-</button> */}
        <AddItem add={this.add} />
        <div>{this.state.arr.map(el => <h3>{el}</h3>)}</div>
      </div>
    )
  }
}
