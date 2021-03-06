import React, { Component} from 'react';
import Todo from './Todo';
import './App.css'

let todoCounter = 1;

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        value: "Buy collar for Knight"
      },
      {
        id: 2,
        value: "Write the continuous testing reflection"
      },
      {
        id: 3,
        value: "Complete API testing automation"
      },
      {
        id: 4,
        value: "Create schedule for July-August"
      },
      {
        id: 5,
        value: "Buy pedigree for cookie"
      },
      {
        id: 6,
        value: "Buy vitamin for the cats"
      }

      
    ],
    item: ""
  };

  handleInputChange = event => {
    this.setState({ item: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const item = {
      id: todoCounter ++,
      value: this.state.item.slice()
    };
    this.setState({
      list: this.state.list.concat(item),
      item: ""
    });
  };

  handleRemove = id => {
    this.setState({
      list: this.state.list.filter(c => c.id !== id)
    });
  };

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 style={{textAlign:"center",marginBottom:"1em", color:"salmon"}}>MY TODO LIST</h1>
          </div>
        </div>

      
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <input
                type="text"
                autoFocus
                value={this.state.item}
                onChange={this.handleInputChange}
                placeholder="Enter a task"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" id="addBtn" className="btn btn-primary">
                Add Task
              </button>
            </div>
          </div>
        </form>
        <div className="row todo-list">
          <div className="col-md-8">
            <h3 style={{color:"#f96353"}}>My tasks</h3>
            {
              !this.state.list.length
              ? (
                <div className="no-task">
                  No task!
                </div>
              ) : (
                <ul>
                  {this.state.list.map(item => {
                    return (
                      <li key={item.id} style={{fontSize:"18px"}}>
                        <Todo {...item} removeTodo={this.handleRemove} />
                      </li>
                    );
                  })}
                </ul>
              )
            }
          </div>
        </div>
      </div>

    );
  }
}

export default App;
