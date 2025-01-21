import React from "react";

class HandleClick extends React.Component{
    render(){
        return(
            <div>
                <img src="../img/5c004b7ee153412f3e4a6604c29a22db - Copy.jpg" alt="" />
                <br /><br />
                <button onClick={()=> alert("I was clicked")
                }>Click me</button>
            </div>
        )
    }
}
export default HandleClick