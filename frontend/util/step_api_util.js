export const fetchSteps = (todo_id,success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/todos/${todo_id}/steps`,
    success,
    error
  });
}

export const createStep = (todo_id,step, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/todos/${todo_id}/steps`,
    data: {step: step},
    success,
    error
  });
}

export const updateStep = (step, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/steps/${step.id}`,
    data: {step: step},
    success,
    error
  });
}

export const destroyStep = (todo_id,step, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo_id}/steps/${step.id}`,
    success,
    error
  });
}
