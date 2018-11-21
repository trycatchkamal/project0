import React, { Component } from 'react';
import './App.css';
import Cards from './Cards'
import {questions} from './Questions'

export default class App extends Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <Cards {...questions}/>
      </div>
    );
  }
}
