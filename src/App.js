import React, { Component } from 'react';
import "./App.css"
import AddItem from './Components/AddItem';
import Counter from './Components/Counter';

export default class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     title: "WS-state"
  //   }
  // }

  state = {
    title: "WS-state",
    age: 25,
    obj: {
      name: "Moncef",
      email: "moncef@gmail.com"
    },
    arr: ["Bonjour", "Hello", "3aslema"],
    count: 0
  }


  add=(x)=>{
    this.setState({
      arr:[...this.state.arr, x]
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
    return (<div className='App'>
      {/* <h1>{this.state.title}</h1>
      <h3>{this.state.age}</h3>
      <h2>{this.state.obj.name}</h2>
      <div>{this.state.arr.map(el => <h3>{el}</h3>)}</div> */}

      {/* <button onClick={this.increment}>+</button> */}
      {/* <h1>{this.state.count}</h1> */}
      {/* <Counter count={this.state.count} />
      <button onClick={this.decrement} >-</button> */}

      <AddItem add={this.add} />
      <div>{this.state.arr.map(el => <h3>{el}</h3>)}</div>
    </div>);
  }
}

