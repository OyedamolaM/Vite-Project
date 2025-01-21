import React from "react"
import TodoItems from "./data/TodosData"
//class function
class Todo extends React.Component{
      constructor(){
        super()
      //   this.state = {
      //         todoState: TodoItems
        }
      //   this.handleChange = this.handleChange.bind(this)
      // }

      // handleChange(id){
      //   alert('changed', id);
         
      // }
  render(){
    return(
     <>
      <div>
        <input type="checkbox" checked = {this.props.checked} onChange={()=> this.props.handleChange(this.props.id)}/>
        <p>{this.props.activity}</p>
      </div>
      </> 
    )
  }
}
//function components
// const Todo = (props) => 
//       <>
//       <div>
//         <input type="checkbox" checked = {props.checked} />
//         <p>{props.activity}</p>
//       </div>
//       </>
    
    
  export default Todo