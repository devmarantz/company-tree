import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      employee: {
        parent: '',
        name: '',
      },
    }
  }

  submitEntry = async (event) => {
    event.preventDefault();
    console.log('submitting');
    const parent = new FormData(event.target).get("parent");
    const employee = new FormData(event.target).get("employee");
    this.setState({
      employee: {
        name: employee,
        parent: parent,
      },
    });
    this.state.employeeList.push({employee: {
      name: employee,
      parent: parent,}
    });   
    this.state.employeeList.forEach(entry => {
      console.log(entry.employee.name);
      var option = document.createElement("option");
      option.text = `${entry.employee.name}`;
      option.value = `${entry.employee.name}`;
      var select = document.getElementById("selectParent");
      select.appendChild(option);
    })
    console.log('this');
  }  



  render() {
    return (
      <div className="App">
        <header className="App-header">
          Devon's Tree
        </header>
        <h2>Enter Employee and Select Parent</h2>
        <h2>If no parent type "none"</h2>
        <nav>
          <form onSubmit={this.submitEntry}>
            <input
              type="text"
              name="employee"
              placeholder="Enter Employee"
            />
            <select name="parent" id="selectParent">
                <option value="None">None</option>
              </select>
            <button type="submit">Enter</button>
          </form>
        </nav>

        <h2>Current Employee</h2>
        <p>Employee: {this.state.employee.name}</p>
        <p>Parent: {this.state.employee.parent}</p>
        <h2>My Team</h2>
        {/* {this.state.employeeList.forEach(entry => {
          <p>Employee: {this.state.employeeList.employee.name}</p>
          <p>Parent: {this.state.employeeList.employee.parent}</p>
        })} */}
      </div>
    );

  }
}

export default App;
