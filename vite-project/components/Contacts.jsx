import React from "react";

function Contact(props) {
  console.log(props);
    return(
      
      
        <div>
          <img src={props.contacts.imgurl} alt="img" />
          <h3>{props.contacts.name}</h3>
          <p>Phone: {props.contacts.contact}</p>
          <p>Email: {props.contacts.email}</p>
        </div>
    )
    
}
export default Contact