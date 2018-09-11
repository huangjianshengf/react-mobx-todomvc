import {observable, computed} from 'mobx';

export default class TodoStore {
	@observable todos = [];

  // 获取未完成的总数
	@computed get activeCount() {
		return this.todos.reduce(
			(sum, todo) => sum + (todo.completed ? 0 : 1),
			0
		)
	}

  // 已经完成的总数
	@computed get completedCount() {
		return this.todos.length - this.activeCount;
	}

  // 添加 todo 
	addTodo (title) {
		this.todos.push({store: this, id: parseInt(Math.random() * 1000000000000), title: title, completed: false});
	}

  // 切换全部
	toggleAll (checked) {
		this.todos.forEach(
			todo => todo.completed = checked
		);
	}

  // 清除已完成的todo 
	clearCompleted () {
		this.todos = this.todos.filter(
			todo => !todo.completed
		);
	}
}
