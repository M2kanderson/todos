import { REQUEST_STEPS, RECEIVE_STEPS, CREATE_STEP, UPDATE_STEP, DESTROY_STEP, receiveSteps, receiveStep, removeStep } from '../actions/step_actions';
import { fetchSteps, createStep, updateStep, destroyStep } from '../util/step_api_util';

const StepMiddleware = store => next => action => {
  let success;
  let error;
  switch (action.type) {
    case REQUEST_STEPS:
      success = data => store.dispatch(receiveSteps(data));
      error = error = e => console.log(e);
      fetchSteps(action.todo_id, success, error);
      return next(action);
    case CREATE_STEP:
      success = data => store.dispatch(receiveStep(data));
      error = error = e => console.log(e);
      createStep(action.todo_id, action.step, success, error);
      return next(action);
    case UPDATE_STEP:
      success = data => store.dispatch(receiveStep(data));
      error = error = e => console.log(e);
      updateStep(action.step, success, error);
      return next(action);
    case DESTROY_STEP:
      success = data => store.dispatch(removeStep(data));
      error = error = e => console.log(e);
      destroyStep(action.todo_id, action.step, success, error);
    default:
      return next(action)
  }
  return next(action);
}

export default StepMiddleware;
