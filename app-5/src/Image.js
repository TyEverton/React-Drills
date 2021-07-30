import React, {Component} from "react" //imports react library functionality

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} /> 
        <div>ERROR </div>
      </div>
    )
  }
}

export default Image //exports image file for data to be used in other components

//line 7 displays url from app.js 
//line 8 displays word error on screen