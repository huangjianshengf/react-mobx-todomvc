import React, { Component } from 'react';
import {observer ,inject} from 'mobx-react';

// 新增 todo 
@inject('todoStore')
@observer
class AddTodoEnter extends Component {
  render() {
    return <input onKeyUp={this.addTodo} className="new-todo" placeholder="What needs to be done?" autoFocus={true}/>;
  }

  addTodo = (e) => {
    // 13 回车
    if (e.keyCode !== 13) {
      return;
    }
    // 阻止冒泡
		e.preventDefault();
    let val = e.target.value.trim();
    
    if (val) {
      this.props.todoStore.addTodo(val);
      e.target.value = '';
    }
  }
}

export default AddTodoEnter;