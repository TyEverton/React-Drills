import React, {Component} from 'react'; //this line imports Reacts functionality
import './App.css'; //imports css styles for the app

class App extends Component { //beginning line of the component
  constructor() { //constructor holds the initial state declaration
    super()

    this.state = {
      filterString:'', //empty array that will be referred to later on  
      foods: ["jerky", "chips & salsa", "sushi", "steak", "hot sauce"] //this is an array of foods that will be displayed on the screen
    }
  }

  handleChange(filter) { //function that filters words that users are typing
    this.setState({filterString: filter}) //changes the state of the empty array, filtering specifically what the user is typing
  }

  render() {
    let foodsToDisplay = this.state.foods
    .filter((element) => { //displays the state of foods and filters it based on the item the user is searching for
      return element.includes(this.state.filterString) //displays on the screen what is being typed as long as it is a value of the array foods
    })
    .map((element, index) => { //maps over every item in the array, separating each index and returns it with the line below
      return <h2 key={index}>{element}</h2> //displays each item inside of the foods array
    })

    return (
      <div className="App">
        <input onChange={event => this.handleChange(event.target.value)} type="text"/>
        {foodsToDisplay}
      </div>
    )
  }
}

//line 29 - as the input box takes characters, the event listener onChange is calling the function handleChange which filters through the array based on the "text" the user is inputting

//line 30 - displays the array of foods as it takes the array as the state

export default App;
