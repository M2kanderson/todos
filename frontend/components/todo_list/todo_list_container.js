import { connect } from 'react-redux';
import TodoList from './todo_list';
import { createTodo, requestTodos, updateTodo, destroyTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selector';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  destroyTodo: (id) => dispatch(destroyTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
