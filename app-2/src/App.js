import React, {Component} from 'react'; //imports functions from React
import './App.css'; //imports styles from css

class App extends Component { //creates component
  constructor() { //constructor is basically a state initiator
  super() //super is used to access variables of its parents class 
  
  this.state = { //sets the initial state of the App constructor
    foods: ["jerky", "chips & salsa", "sushi", "steak", "hot sauce"] //array to be displayed for users
    }
  }

  render() { //renders info above to the webpage
    let foodsToDisplay = this.state.foods //creates an array that maps through the entire array of foods for it to then display each item individually
    .map((element, index) => {
      return <h2 key={index}>{element}</h2> //returns individual items based on their index within the foods element
    })

    return (
      <div className="App">
        {foodsToDisplay} 
      </div>
    )
}

export default App;

//line 21 displays the foodsToDisplay element which maps through the entire foods array for each item to be displayed