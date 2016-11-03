import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = props.todo;
  }

  updateTodo(){
    let todo = this.props.todo;
    todo = {id: todo.id ,title: todo.title, body: todo.body, done: !todo.done};
    this.props.updateTodo(todo);
  }

  render(){
    return <li>
    {this.props.todo.title}
    <button onClick={(e) => this.props.destroyTodo(this.props.todo.id)}>Delete</button>
    <button onClick={(e) => this.updateTodo()}>{this.props.todo.done ? "Undo" : "Done"}</button>
    </li>;
  }
}

export default TodoListItem;
