import React, { Component } from 'react';
import Navbar from './components/nav/Navbar'
import MainPage from './components/MainPage'
import Login from './components/login/Login';
import Register from './components/register/Register';


class App extends Component {
  state = {
    activeUser: "",
    currentView: "",
    activeUsername: ""
  }
  changeUser = (user, username) => {
    if (user === null) {
      this.setState({
        activeUser: null
      })
    }
    else {
      this.setState({
        activeUser: user,
        activeUsername: username
      })
    }
  }
  showView = function (e) {

    let view = e;

    if (view === "logout") {
      this.setState({
        activeUser: "",
        currentView: "login"
      })
      sessionStorage.removeItem("userInfo")
      this.showView("login");
    }
    else {
      this.setState({
        currentView: view
      })
    }

    // Update state to correct view will be rendered
  }.bind(this);


  // Function to decide what page gets rendered depending on what currentView is
  changeView = () => {
    if (this.state.currentView === "login") {
      return (

        <Login activeUser={this.state.activeUser} changeView={this.changeView} setActiveUser={this.changeUser} currentView={this.state.currentView} showView={this.showView} />
      )
    }
    else if (this.state.currentView === "mainpage") {
      return (
        <MainPage activeUser={this.state.activeUser} activeUsername={this.state.activeUsername} currentView={this.state.currentView} showView={this.showView} />
      )
    }
    else if (this.state.currentView === "register") {
      return (

        <Register setActiveUser={this.setActiveUser} currentView={this.state.currentView} showView={this.showView} />
      )
    }
    else if (sessionStorage.getItem("userInfo") === null || "") {
      return (
        <Login showView={this.showView} setActiveUser={this.changeUser
        } activeUser={this.state.activeUser} changeView={this.changeView} currentView={this.state.currentView} />
      )
    }


  }


  onLoad = () => {
    let user = JSON.parse(sessionStorage.getItem("userInfo"))
    if (user !== null) {
      this.setState({
        activeUser: user.userId,
        currentView: user.currentView,
        activeUsername: user.username
      })
      this.changeView()
    }
  }
  componentDidMount() {
    this.onLoad()
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar activeUser={this.state.activeUser} showView={this.showView} />
          {this.changeView()}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
