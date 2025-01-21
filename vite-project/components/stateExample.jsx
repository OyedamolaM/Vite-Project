import React from "react";
import ChangingState from "./ChangingState";

class stateExample extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <h1>This is {this.props.count}</h1>
        )
    }
}
export default stateExample