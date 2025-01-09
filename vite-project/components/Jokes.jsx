import React from "react";

class Jokes extends React.Component{
  render(){
    return(
      <div>
      <h1 style={{display: !this.props.question && "none"}}> Question : {this.props.question}</h1>
      <h3 style={{color: !this.props.question && "blue"}}>Joke: {this.props.punchline}</h3>  <br />
      <hr />
      </div>
    )
  }
}

// const Jokes = (props) => 
//     <>
//     <div>
//       <h1 style={{display: !props.question && "none"}}> Question : {props.question}</h1>
//       <h3 style={{color: !props.question && "blue"}}>Joke: {props.punchline}</h3>  <br />
//       <hr />
//     </div>
    
//     </>

export default Jokes