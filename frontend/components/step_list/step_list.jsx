import React from 'react'
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';


const StepList = ({steps, todo_id, createStep}) => (
  <div>
    <h3>Steps:</h3>
    <ul className="step-list">
         {steps.map((step) => {
           return <StepListItemContainer
                         step={step}
                         key={step.id}/>
         })}
    </ul>
    <StepForm todo_id={todo_id} createStep={createStep}/>
  </div>
)

// class StepList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//   }
//   componentDidMount() {
//     this.props.requestSteps();
//   }
//
//   render(){
//     let list = this.props.todos.map((todo) => {
//       return <StepListItemContainer
//                     step={step}
//                     key={todo.id}/>
//     });
//     return (
//       <div>
//         <ul className="todo-list">
//           {list}
//         </ul>
//         <StepForm createStep={this.props.createTodo}/>
//       </div>
//       );
//   }
// }

export default StepList;
