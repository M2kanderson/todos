import { REQUEST_TODOS, RECEIVE_TODOS, CREATE_TODO, UPDATE_TODO, DESTROY_TODO, receiveTodos, receiveTodo, removeTodo } from '../actions/todo_actions';
import { fetchTodos, createTodo, updateTodo, destroyTodo } from '../util/todo_api_util';

const TodoMiddleware = store => next => action => {
  let success;
  let error;
  switch (action.type) {
    case REQUEST_TODOS:
      success = data => store.dispatch(receiveTodos(data));
      error = error = e => console.log(e);
      fetchTodos(success, error);
      return next(action);
    case CREATE_TODO:
      success = data => store.dispatch(receiveTodo(data));
      error = error = e => console.log(e);
      createTodo(action.todo, success, error);
      return next(action);
    case UPDATE_TODO:
      success = data => store.dispatch(receiveTodo(data));
      error = error = e => console.log(e);
      updateTodo(action.todo, success, error);
      return next(action);
    case DESTROY_TODO:
      success = data => store.dispatch(removeTodo(data));
      error = error = e => console.log(e);
      destroyTodo(action.id, success, error);
    default:
      return next(action)
  }
  return next(action);
}

export default TodoMiddleware;
