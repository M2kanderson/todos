import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {id: this.props.todo.id,
                  title: this.props.todo.title,
                  body: this.props.todo.body,
                  done: this.props.todo.done,
                  detail: false};
  }

  updateTodo(){
    let todo = this.props.todo;
    todo = {id: todo.id ,title: todo.title, body: todo.body, done: !todo.done};
    this.props.updateTodo(todo);
  }

  render(){
    return <li>
      <h2 onClick={() => this.setState({detail: !this.state.detail})}>{this.props.todo.title}</h2>
      <button onClick={(e) => this.updateTodo()}>{this.props.todo.done ? "Undo" : "Done"}</button>
      {this.state.detail ? <TodoDetailViewContainer todo={this.props.todo} />: ""}
    </li>;
  }
}

export default TodoListItem;
