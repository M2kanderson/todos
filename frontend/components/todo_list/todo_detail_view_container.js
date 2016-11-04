import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { destroyTodo } from '../../actions/todo_actions';
import { requestSteps } from '../../actions/step_actions';


const mapDispatchToProps = (dispatch, {todo}) => ({
  destroyTodo: () => dispatch(destroyTodo(todo)),
  requestSteps: () => dispatch(requestSteps(todo.id))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
