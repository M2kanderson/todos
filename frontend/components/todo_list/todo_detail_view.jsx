import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = props.todo;
  }


  render(){
    return <div>
      <p>Body:{this.props.todo.body}</p>
      <p>Done:{this.props.todo.done ? "True" : "False"}</p>
      <button onClick={(e) => this.props.destroyTodo(this.props.todo.id)}>Delete</button>
    </div>;
  }
}

export default TodoDetailView;
