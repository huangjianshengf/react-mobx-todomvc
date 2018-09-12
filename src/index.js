// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';

import TodoStore from './stores/ListStore';
import ViewStore from './stores/ViewStore';
import {Provider} from 'mobx-react';

let todoStore = new TodoStore();
let viewStore = new ViewStore();

todoStore.todoTitleChangeReaction();

ReactDOM.render((
    <Provider todoStore={todoStore} viewStore={viewStore}>
        <TodoApp />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
