import { applyMiddleware } from 'redux';
import TodoMiddleware from './todo_middleware';
import StepMiddleware from './step_middleware';

const MasterMiddleware = applyMiddleware(TodoMiddleware, StepMiddleware);

export default MasterMiddleware;
