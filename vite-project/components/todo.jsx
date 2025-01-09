import React from "react"
//class function
class Todo extends React.Component{
  render(){
    return(
     <>
      <div>
        <input type="checkbox" checked = {this.props.checked} />
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