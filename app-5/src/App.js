import React, {Component} from 'react'; //imports react library functionality
import Image from "./Image" //imports the image.js file and statements / component
import './App.css'; //imports page css

class App extends Component { //creates component
  render () {  //renders component
    return ( //returns things below to the screen
      <div className="App">
        <Image url={"https://http.cat/409"}/>
      </div>
    )
  }
}

export default App; //exports App file for others to import 
//line 8 displays the "App" file on the screen
//displays image under specified url
