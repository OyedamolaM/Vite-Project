import React from "react"

const Todo = (props) => 
      <>
      <div>
        <input type="checkbox" checked = {props.checked} />
        <p>{props.activity}</p>
      </div>
      </>
    
    
  export default Todo