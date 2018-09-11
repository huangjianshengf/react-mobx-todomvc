import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

@inject('todoStore', 'viewStore')
@observer
class TodoFooter extends Component {
  render() {
    let {todoStore} = this.props;
    if (!todoStore.activeCount && !todoStore.completedCount) {
      return null;
    }

    return (
      <footer className="footer">
				<span className="todo-count">
          <strong>{todoStore.activeCount}</strong> {this.pluralize()}
				</span>
				<ul className="filters">
					{this.renderFilterLink("All")}
					{this.renderFilterLink("Active")}
					{this.renderFilterLink("Completed")}
				</ul>
				{ todoStore.completedCount === 0
					? null
					: 	<button
							className="clear-completed"
							onClick={this.clearCompleted}>
							Clear completed { todoStore.completedCount }
						</button>
				}
			</footer>
    );
  }

  pluralize = () => {
    return this.props.todoStore.activeCount <= 1 ? 'item' : 'items';
  }
  renderFilterLink = (filterName) => {
    return (
      <li>
        <a href={'#/' + (filterName !== 'All' ? filterName.toLowerCase(): '')}
          style={{marginRight: '20px'}}
          className={filterName ===  this.props.viewStore.todoFilter ? "selected" : ""}>
          { filterName }
        </a>
      </li>
    )
  }
  clearCompleted = () => {
    this.props.todoStore.clearCompleted();
  }

}

export default TodoFooter;