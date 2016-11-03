import { REQUEST_TODOS, RECEIVE_TODOS, receiveTodos } from '../actions/todo_actions';
import { fetchTodos } from '../util/todo_api_util';

const TodoMiddleware = store => next => action => {
  const success = data => store.dispatch(receiveTodos(data));
  const error = e => console.log(e);
  switch (action.type) {
    case REQUEST_TODOS:
      fetchTodos(success, error);
      return next(action)
    default:
      return next(action)
  }
  return next(action);
}

export default TodoMiddleware;
