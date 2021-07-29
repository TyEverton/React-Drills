import React, {Component} from "react" //imports reacts functions

class Login extends Component { //beginning line of a component
  constructor() { //placeholder for initial state
    super()

    this.state = { //initial state for component
      username: "", //empty array for username
      password: "" //empty array for password
    }

 this.handleLogin = this.handleLogin.bind(this)//binds handleLogin to states value
} 

handleUsernameChange(name) {
  this.setState({username: name})
} 

handlePasswordChange(pass) {
  this.setState({password: pass})
}

handleLogin() {
  alert(`Username: ${this.state.username} Password: ${this.state.password}`)
}

render() {
  return(
    <div>
      <input 
      onChange={event => this.handleUsernameChange(event.target.value)}
      type="text"
      />
      <input 
      onChange={event => this.handlePasswordChange(event.target.value)}
      type="text"
      />
      <button onClick={this.handleLogin}>LOGIN</button>
    </div>
    )
  }
}

export default Login