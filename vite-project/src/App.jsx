import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contact from "../components/Contacts.jsx";
import './App.css'
import Todo from '../components/todo.jsx';
import Jokes from '../components/Jokes.jsx';
import JokesData from '../components/data/JokesData.jsx';
import TodoItems from '../components/data/TodosData.jsx';
import React from 'react';


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

class App extends React.Component{
  render(){
    const firstName = "oyedamola"
  const lastName = "moreira"
  const date = new Date
  const hours = date.getHours
  const styles = {
    backgroundColor: "green"}
  let timeOfDay
  hours <= 12 ? 
  (styles.color = "yellow", timeOfDay = "morning") : styles.color ="blue", timeOfDay = "afternoon"
  
  const jokeComponents = JokesData.map(joke =>
     <Jokes key={joke.id} question={joke.question} punchline={joke.punchline}/>
  )
  const todosComponents = TodoItems.map(action => <Todo key={action.id} activity ={action.activity} checked= {action.completed}/>)
  
    return(
      <>
      <div>
        <Contact contacts = {{name:"Mr Whikerson", contact:"09282992827", email:"aoyedamola@gmail.com", imgurl:"../img/5c4c68e62f80b04e4b864ca70c76121e - Copy.jpg"}} />
        <Contact contacts= {{name: firstName + " " + lastName, contact:"09183837729", email:"abushy.oyedamola@gmail.com", imgurl:"../img/5c4c68e62f80b04e4b864ca70c76121e - Copy.jpg"}}/>
        <Contact contacts= {{name: "Mr Mainoo", contact:"07087474993", email:"smart@gmail.com", imgurl:"../img/5c4c68e62f80b04e4b864ca70c76121e - Copy.jpg"}}/>
        <Contact contacts= {{name: "Mr Oyedamola", contact:"08165258326", email:"savanspharmacy@gmail.com", imgurl:"../img/8948890ef36a7ac7ae555b286f30dffa.jpg"}}/>
        <Contact contacts= {{name: "Mr Smart", contact:"08174647747", email:"smart@gmail.com", imgurl:"../img/5c004b7ee153412f3e4a6604c29a22db - Copy.jpg"}} />
        <Contact contacts= {{name: "Mrs Chinwe", contact:"08101490829", email:"savansfarmacies@gmail.com", imgurl:"../img/5c4c68e62f80b04e4b864ca70c76121e - Copy.jpg"}}/>
      </div>
      <div>
      {todosComponents}
      {jokeComponents}
      </div>
      </>
    )
  }
}

// const App = () => {

//   const firstName = "oyedamola"
//   const lastName = "moreira"
//   const date = new Date
//   const hours = date.getHours
//   const styles = {
//     backgroundColor: "green"}
//   let timeOfDay
//   hours <= 12 ? 
//   (styles.color = "yellow", timeOfDay = "morning") : styles.color ="blue", timeOfDay = "afternoon"
  
//   const jokeComponents = JokesData.map(joke =>
//      <Jokes key={joke.id} question={joke.question} punchline={joke.punchline}/>
//   )
//   const todosComponents = TodoItems.map(action => <Todo key={action.id} activity ={action.activity} checked= {action.completed}/>)
  
//   return(
//     <>
//       <div >
//         <Contact 
//         contacts = {{name:"Mr Whikerson", contact:"09282992827", email:"aoyedamola@gmail.com", imgurl:"../img/5c4c68e62f80b04e4b864ca70c76121e - Copy.jpg"}} />
//         <Contact 
//         contacts= {{name: firstName + " " + lastName, contact:"09183837729", email:"abushy.oyedamola@gmail.com", imgurl:"../img/5c4c68e62f80b04e4b864ca70c76121e - Copy.jpg"}}
//         />
//         <Contact contacts= {{name: "Mr Mainoo", contact:"07087474993", email:"smart@gmail.com", imgurl:"../img/5c4c68e62f80b04e4b864ca70c76121e - Copy.jpg"}}/>
//         <Contact contacts= {{name: "Mr Oyedamola", contact:"08165258326", email:"savanspharmacy@gmail.com", imgurl:"../img/8948890ef36a7ac7ae555b286f30dffa.jpg"}}/>
//         <Contact contacts= {{name: "Mr Smart", contact:"08174647747", email:"smart@gmail.com", imgurl:"../img/5c004b7ee153412f3e4a6604c29a22db - Copy.jpg"}} />
//         <Contact contacts= {{name: "Mrs Chinwe", contact:"08101490829", email:"savansfarmacies@gmail.com", imgurl:"../img/5c4c68e62f80b04e4b864ca70c76121e - Copy.jpg"}}/>
        

//         {/* <div>
//           <img src="" alt="img" />
//           <h3 style={styles}></h3>
//           <p>Phone: 09183837729 </p>
//           <p>Email: aoyedamola@gmail.com</p>
//           <p>it is currently about {date.getHours()%12}:{date.getMinutes()}pm which is {timeOfDay}</p>
//         </div> */}
//       </div>
//       <div>
//       {todosComponents}
//       {jokeComponents}
//       </div>
//     </>
//   )
  
// }

export default App
