import { connect } from 'react-redux';
import StepList from './step_list';
import { createStep } from '../../actions/step_actions';
import { stepsById } from '../../reducers/selector';

const mapStateToProps = (state, { todo_id} ) => ({
  steps: stepsById(state, todo_id),
  todo_id: todo_id
});

const mapDispatchToProps = (dispatch) => ({
  createStep: (step) => dispatch(createStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
