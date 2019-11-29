import React, { Component } from 'react';
import './App.css';
import Add from './components/add/Add';
import ToDoList from './components/todolist/Todolist';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Add/>
          <ToDoList />
        </div>
      
    );
  }
}

export default App;
