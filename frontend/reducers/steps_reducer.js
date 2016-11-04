import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

import { merge } from 'lodash';

let _defaultState = {
};

const StepsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_STEPS:
      newState = {};
      action.steps.forEach(step => {
        newState[step.todo_id] = newState[step.todo_id] || {};
        newState[step.todo_id][step.id] = step;
      });
      return newState;
    case RECEIVE_STEP:
      newState = merge({}, state);
      newState[action.step.todo_id] = newState[action.step.todo_id] || {};
      newState[action.step.todo_id][action.step.id] = action.step;
      return newState;
    case REMOVE_STEP:
      newState = merge({}, state);
      newState[action.step.todo_id] = newState[action.step.todo_id] || {};
      delete newState[action.step.todo_id][action.step.id];
      return newState;
    default:
      return state;
  }
  return state;
}

export default StepsReducer;
