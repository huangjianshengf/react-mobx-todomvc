import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

@inject('viewStore', 'todoStore')
@observer
class TodoItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      editText: ''
    }
  }
  render() {
    let todo = this.props.todo;
    let viewStore = this.props.viewStore;
    return (
      <li className={[
				todo.completed ? "completed": "",
				todo === viewStore.todoBeingEdited ? "editing" : ""
			].join(" ")}>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={this.handleToggle}
					/>
					<label onDoubleClick={this.handleEdit}>
						{todo.title}
					</label>
					<button className="destroy" onClick={this.handleDestroy} />
				</div>
				<input
					ref="editField"
					className="edit"
					value={this.state.editText}
					onBlur={this.handleSubmit}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
			</li>
    );
  }

  handleToggle = (e) => {
    // 切换单个 判断 总是
    this.props.todo.completed = !this.props.todo.completed;
  }
  // 双击编辑
  handleEdit = (e) => {
    console.log(1);
    const todo = this.props.todo;
    this.props.viewStore.todoBeingEdited = todo;
    this.setState({
      editText: todo.title
    });
  }
  
  handleChange = (e) => {
    this.setState({
      editText: e.target.value.trim()
    });
  }
  handleKeyDown = (e) => {
    // 回车保存
    if (e.keyCode === 13) {
      // 保存
      this.handleSubmit();
    } else if (e.keyCode === 27) {
      // esc 重置
      this.setState({
        editText: this.props.todo.title
      });
      this.props.viewStore.todoBeingEdited = null;
    }
  }
  // 保存
  handleSubmit = () => {
    const todo = this.props.todo;
    this.props.viewStore.todoBeingEdited = null;
    todo.title = this.state.editText;
    console.log(todo);
  }
  // 销毁
  handleDestroy = () => {
    console.info(this.props.todo)
    this.props.todoStore.todos.remove(this.props.todo);
    this.props.viewStore.todoBeingEdited = null;
  }
}

export default TodoItem;