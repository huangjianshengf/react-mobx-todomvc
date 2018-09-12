import React, { Component } from 'react';
import AddTodoEnter from './AddTodoEnter';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import {observer, inject} from 'mobx-react'
// todomvc css 样式  npm install todomvc-app-css -S
import 'todomvc-app-css/index.css'

@inject('viewStore')
@observer
class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
            <AddTodoEnter />
        </header>
        <TodoList />
				<TodoFooter />
      </div>
    );
  }

  componentDidMount() {
      var viewStore = this.props.viewStore;
      // 前端路由插件 https://github.com/flatiron/director github官网
      var { Router } = require('director/build/director');
			var router = Router({
				'/': function() { viewStore.todoFilter = 'All'; },
				'/active': function() { viewStore.todoFilter = 'Active'; },
				'/completed': function() { viewStore.todoFilter = 'Completed'; }
			});
		router.init('/');
	}
}

export default TodoApp;
