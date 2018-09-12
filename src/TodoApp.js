import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AddTodoEnter from './AddTodoEnter';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import {observer, inject} from 'mobx-react'
// todomvc css 样式  npm install todomvc-app-css -S
import 'todomvc-app-css/index.css'

@inject('viewStore', 'todoStore')
@observer
class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
            <AddTodoEnter />
        </header>
        <TodoList />
				<TodoFooter todoStore={this.props.todoStore} viewStore={this.props.viewStore} ref={todoFooter => this._todoFooter = todoFooter} />
      </div>
    );
  }

  componentDidMount() {
      // 测试 用 props 传递 store 和 用inject 注入 用ref 拿到的 实例区别
      // console.log(this._todoFooter)
  }
}

export default TodoApp;
