import React from 'react'
import { requestTodos } from '../../actions/todo_actions';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.requestTodos();
  }

  render(){
    let list = this.props.todos.map((todo) => {
      return <li>{todo.title}</li>
    });
    return (<ul className="todo-list">
      {list}
    </ul>);
  }
}

export default Synth;
