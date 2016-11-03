import React from 'react'
import { requestTodos } from '../../actions/todo_actions';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.requestTodos();
  }

  render(){
    let list = this.props.todos.map((todo) => {
      return <TodoListItem todo={todo}
                           key={todo.id}
                           updateTodo={this.props.updateTodo}
                           destroyTodo={this.props.destroyTodo}/>
    });
    return (
      <div>
        <ul className="todo-list">
          {list}
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
      );
  }
}

export default TodoList;
