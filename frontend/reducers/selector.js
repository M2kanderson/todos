export const allTodos = (state) => {
  return Object.keys(state.todos).map((id) => state.todos[id])
}


export const stepsById = ({ steps }, todo_id) => (
  steps[todo_id] ? Object.keys(steps[todo_id]).map(key => steps[todo_id][key]) : []
);
