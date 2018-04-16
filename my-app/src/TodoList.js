import React, { Component } from 'react';
import './assets/styles/layout.css';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.displayList.map((value, key) => {
            return(
                <li key={key}>
                  <p className="listItem">{value}</p>
                  <button className="rmvBtn" onClick={this.props.removeItem.bind(this, value)}>X</button>
                </li>
            );
          })
        }
      </ul>
    );
  }
}

export default TodoList;
