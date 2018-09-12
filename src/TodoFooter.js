import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

// @inject('todoStore', 'viewStore')
@observer
class TodoFooter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filterList:['All', 'Active', 'Completed']
    }
  }
  render() {
    let {todoStore} = this.props;
    if (!todoStore.activeCount && !todoStore.completedCount) {
      return null;
    }

    return (
      <footer className="footer">
				<span className="todo-count"  ref="todo-count">
          <strong>{todoStore.activeCount}</strong> {this.pluralize()}
				</span>
				<ul className="filters">
          {this.state.filterList.map(
            (item, index) =>(
              <li key={index}>
                <a
                  onClick={e => this.changeFilter(item)}
                  style={{marginRight: '20px'}}
                  className={item ===  this.props.viewStore.todoFilter ? "selected" : ""}>
                  { item }
                </a>
              </li>
            ) 
          )}
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
  changeFilter = (filter) => {
      var viewStore = this.props.viewStore;
      viewStore.todoFilter = filter;
  }
  pluralize = () => {
    return this.props.todoStore.activeCount <= 1 ? 'item' : 'items';
  }
  clearCompleted = () => {
    this.props.todoStore.clearCompleted();
  }

}

export default TodoFooter;