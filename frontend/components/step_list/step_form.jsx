import React from 'react'

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      todo_id: this.props.todo_id,
      done: false
    }
    this.props = props;
  }

  linkState(key){
    return (e) => this.setState({[key]: e.target.value});
  }

  createStep(e){
    e.preventDefault();
    this.props.createStep(this.state);
    this.setState({
      title: "",
      body: ""
    });

  }

  render(){
    return (
      <div className="step-form">
        <p>Title:</p>
        <input className= "step-title"
               placeholder = "Go on a run"
               onChange={this.linkState('title')}
               value={this.state.title}></input>
        <p>Description:</p>
        <input className= "step-body"
               placeholder="run 5 miles"
               onChange={this.linkState('body')}
               value={this.state.body}></input>
        <p>Done:</p>
        <button onClick={this.createStep.bind(this)}>Submit</button>
      </div>);
  }
}

export default StepForm;
