import React from 'react';
import {merge} from 'lodash';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  toggleStep(){
    let step = merge({},this.props.step, {done: !this.props.step.done});
    this.props.updateStep(step);
  }

  render(){
    return <li>
      <h3>{this.props.step.title}</h3>
      <p>{this.props.step.body}</p>
      <button onClick={this.toggleStep.bind(this)}>{this.props.step.done ? "Undo" : "Done"}</button>
      <button onClick={this.props.destroyStep}>Delete</button>
    </li>;
  }
}

export default StepListItem;
