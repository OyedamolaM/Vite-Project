import React from "react";

const Jokes = (props) => 
    <>
    <div>
      <h1 style={{display: !props.question && "none"}}> Question : {props.question}</h1>
      <h3 style={{color: !props.question && "blue"}}>Joke: {props.punchline}</h3>  <br />
      <hr />
    </div>
    
    </>

export default Jokes