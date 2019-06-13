import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Chrono from './Components/Chrono';
import Savelist from './Components/Savelist';

class App extends Component {

  state = { title: "LE Chrono", list: [] }

  onChangeTitle(event) {
    this.setState({ title: event.currentTarget.value })
  }

  saveTime(time) {
    const { list } = this.state
    this.setState({ list: list.concat(time) })
  }

  render() {
    const { title, list } = this.state
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo"/><br/>
        <input type="text" onChange={this.onChangeTitle.bind(this)}></input>
        <Chrono title={title} onSave={this.saveTime.bind(this)}></Chrono>
        <Savelist list={list}></Savelist>
      </div>
    );
  }
}
export default App;