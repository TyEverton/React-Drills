import React, {Component} from 'react';
import './App.css';
import Todo from "./Todo"

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      input: ''
    }

    this.handleAddTask = this.handleAddTask.bind(this) 
  }

  handleInputChange(value) {
    this.setState({input: value})
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input]
    })
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })

    return (
      <div className="App">
        <h1>TO-DO LIST</h1>

        <div>
          <input 
          value={this.state.input}
          placeholder="ENTER NEW TASK"
          onChange={event => this.handleInputChange(event.target.value)}
          />

          <button onClick={this.handleAddTask}>ADD</button>
        </div>
        
        <br />

        {list}
      </div>
    )
  }
}

export default App;
