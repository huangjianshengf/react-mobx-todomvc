import React, { Component } from 'react';
import TodoItem from './TodoItem'
import {observer, inject} from 'mobx-react'

// 注入 todoStore 
@inject('todoStore', 'viewStore')
@observer
class TodoEnter extends Component {
  render() {
    let {todoStore} = this.props;
    return (
      <section className="main">
        <input
          className="toggle-all"
          id="toggle-all"
          type="checkbox"
          checked={todoStore.completedCount === todoStore.todos.length}
          onChange={this.toggleAll}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {this.getVisibleTodos().map(todo =>
            (<TodoItem
              key={todo.id}
              todo={todo}
            />)
          )}
        </ul>
      </section>
    );
  }

  // 全选切换
  toggleAll = (e) => {
    this.props.todoStore.toggleAll(e.target.checked);
  }
  // 根据todoFilter 显示
  getVisibleTodos () {
    let {todoStore, viewStore}  = this.props;
    return todoStore.todos.filter(item => {
      if (viewStore.todoFilter === 'All') {
        return true;
      } else if (viewStore.todoFilter === 'Active') {
        // 未完成
        return !item.completed
      } else if (viewStore.todoFilter === 'Completed') {
        return item.completed
      }
    })
  }
}

export default TodoEnter;