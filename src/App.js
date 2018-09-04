import React, { Component } from 'react';
import Navbar from './components/nav/Navbar'
import MainPage from './components/MainPage'
import ArticleForm from './components/articles/ArticleForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainPage />
        <ArticleForm />
      </React.Fragment>
    );
  }
}

export default App;
