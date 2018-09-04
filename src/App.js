import React, { Component } from 'react';
import Navbar from './components/nav/Navbar'
import MainPage from './components/MainPage'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainPage />
      </React.Fragment>
    );
  }
}

export default App;
