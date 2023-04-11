import React, { Component } from 'react';
import './App.css';
import ChildProperty from './03/03_ChildProperty';

class App extends Component {
  render() {
    return (
      <ChildProperty>
        <p>자식 노드</p>
      </ChildProperty>
    );
  }
}

export default App;
