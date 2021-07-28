import React, {Component} from "react" //imports reacts functions
import './App.css'; //imports css for this particular app

class App extends Component { //beginning line of a component
  constructor() { //this is where we begin the placeholder for our initial state
    super()

    this.state = { //this is our initial state
      message: " " //this is what is going to appear below our input box - right now it is empty, though once users begin to type, their text it will be displayed below.
    }
  }

  handleChange(value) { //this is the event listener that listens to the input box and changes value as a user submits their entry
    this.setState({message: value}) //this is where the state of message is adjusted to the value that the user inputs. without having the word value matching in handleChange and following message, the users input would not be displayed 
  }

  render() { //this is where the app is rendered to the page. everything inside of the render and return will be viewed by the user.
    return (
      <div className="App"> 
        <input onChange={event => this.handleChange(event.target.value)} type="text" />
        <p>{this.state.message}</p> 
      </div>
    )
  }
}
//line 20 takes the input and using an onChange (event handler) it ties the change event to the handleChange function, which displays the users input which is done with event.target.value

 // line 21  ties the users input to the state of the component - giving us final results of users input
export default App;
