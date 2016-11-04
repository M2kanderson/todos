import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = props.todo;
  }

  componentDidMount(){
    this.props.requestSteps();
  }


  render(){
    return <div>
      <p>Body:{this.props.todo.body}</p>
      <p>Done:{this.props.todo.done ? "True" : "False"}</p>
      <StepListContainer todo_id={this.props.todo.id} />
      <button onClick={(e) => this.props.destroyTodo}>Delete</button>
    </div>;
  }
}

export default TodoDetailView;
