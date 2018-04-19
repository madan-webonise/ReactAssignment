import React, { Component } from 'react';
import './assets/styles/layout.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayFromParent: this.props.displayList
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.displayList !== prevState.arrayFromParent) {
      nextProps.displayList.sort();
    }
    return null;
  }

  render() {
    return (
      <ul className="listItemUl">
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
