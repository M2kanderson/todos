import React from 'react'
import { requestTodos } from '../../actions/todo_actions';
import TodoListItem from './todo_list_item';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    }
    this.props = props;
  }

  linkState(key){
    if(key === "done")
    {
      return (e) => this.setState({[key]: e.target.checked});
    }
    return (e) => this.setState({[key]: e.target.value});
  }

  createTodo(e){
    e.preventDefault();
    this.props.createTodo(this.state);
  }

  render(){
    return (
      <div className="todo-form">
        <p>Title:</p>
        <input onChange={this.linkState('title')} value={this.state.title}></input>
        <p>Body:</p>
        <input onChange={this.linkState('body')} value={this.state.body}></input>
        <p>Done:</p>
        <input type="checkbox" onChange={this.linkState('done')} value={this.state.done}></input>
        <button onClick={this.createTodo.bind(this)}>Submit</button>
      </div>);
  }
}

export default TodoForm;
