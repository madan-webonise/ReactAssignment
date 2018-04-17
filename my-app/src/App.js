import React, { Component } from 'react';
import './App.css';
import './assets/styles/layout.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArray: []
    };
    this.inputData = React.createRef();
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    let insertElement = this.inputData.current;
    let insertValue = insertElement.value;
    let tempArray = [...this.state.todoArray];
    if (insertValue !== '') {
      tempArray.push(insertValue);
      this.setState({
        todoArray: tempArray
      });
    }
    insertElement.value = '';
  }

//delete functionality has to be done

  deleteItem(item) {
    let tempArray = [...this.state.todoArray];
    let index = tempArray.indexOf(item);
    if(index > -1) {
      tempArray.splice(index, 1);
    }
    this.setState({
      todoArray: tempArray
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addItem}>
          <input type="text"
                 ref={this.inputData}
                 placeholder="Enter ToDo Here"
                 className="inputBox"/>
          <button className="addBtn">Add Button</button>
        </form>
        <TodoList displayList={this.state.todoArray} removeItem={this.deleteItem} />
      </div>
    );
  }
}
export default App;
