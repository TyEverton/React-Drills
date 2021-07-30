import React, {Component} from "react"

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} /> //displays url from app.js 
        <div>ERROR </div> //displays word error on screen
      </div>
    )
  }
}

export default Image //exports image file for data to be used in other components