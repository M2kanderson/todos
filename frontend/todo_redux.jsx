import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store.js';

// import Note from './util/note';
// import configureStore from './store/store';
// import Root from './components/root';

import { fetchTodos }  from './util/todo_api_util';
import { requestTodos } from './actions/todo_actions';

import { allTodos } from './reducers/selector';
window.fetchTodos = fetchTodos;
window.requestTodos = requestTodos;
window.allTodos = allTodos;




document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('content');
  const store = configureStore();
	ReactDOM.render(
		<Root store={store}/>,
    rootEl

	);
  window.store = store;
});
