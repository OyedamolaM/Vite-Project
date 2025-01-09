import React from "react";

class Contact extends React.Component{
  render(){
    return(
         <div>
          <img src={this.props.contacts.imgurl} alt="img" />
          <h3>{this.props.contacts.name}</h3>
          <p>Phone: {this.props.contacts.contact}</p>
          <p>Email: {this.props.contacts.email}</p>
        </div>
    )
  }
}

// functional components
// function Contact(props) {
//     return(
      
      
//         <div>
//           <img src={props.contacts.imgurl} alt="img" />
//           <h3>{props.contacts.name}</h3>
//           <p>Phone: {props.contacts.contact}</p>
//           <p>Email: {props.contacts.email}</p>
//         </div>
//     )
    
// }
export default Contact