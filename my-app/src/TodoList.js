import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.helloWorld}</li>
      </ul>
    );
  }
}

export default TodoList;
