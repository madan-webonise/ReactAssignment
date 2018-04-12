import React, { Component } from 'react';
import './App.css';
import './assets/styles/layout.css';
import TodoList from './TodoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArray: ['hello', 'madan', 'akshay'],
      name: "madan"
    };
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addItem}>
          <input type="text"
                 placeholder="Enter ToDo Here"/>
          <button className="addBtn">Add Button</button>
        </form>
        <TodoList helloWorld={this.state.name} />
      </div>
    );
  }
}

export default App;
