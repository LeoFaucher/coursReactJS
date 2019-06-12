import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chrono from './Components/Chrono';
import Savelist from './Components/Savelist';

class App extends Component {

  state = {title: "Leo", items: []}

  onChangeTitle(event){
    this.setState({ title: event.currentTarget.value })
  }

  saveTime(){
    const list = []
    this.setState({ items: }) 
  }

  render(){
    const { title } = this.state
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo"/><br/>
        <input type="text" onChange={this.onChangeTitle.bind(this)}></input>
        <Chrono title={title} onSave={this.saveTime.bind(this)}></Chrono>
        <Savelist items={items}></Savelist>
      </div>
    );
  }
}
export default App;