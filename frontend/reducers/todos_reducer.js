import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

import { merge } from 'lodash';

let _defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodosReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    case RECEIVE_TODO:
      let todo = action.todo;
      return merge({}, state, {[action.todo.id]:{id: todo.id, title: todo.title, body: todo.body, done: todo.done}});
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
  return state;
}

export default TodosReducer;
