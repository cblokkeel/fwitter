import React, { Component, Fragment } from 'react'
import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import PostTweet from './components/PostTweet/PostTweet'
import Register from './components/Register/Register'
import SignIn from './components/SignIn/SignIn'
import tweets from './tweets'

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'register'
    }
  }

  goToRegister = () => {
    this.setState({ route: 'register'})
  }

  goToSignin = () => {
    this.setState({ route: 'signin'})
  }

  goToHome = () => {
    this.setState({ route: 'home'})
  }

  handleRegister = () => {
    this.goToHome()
  }

  handleSignin = () => {
    this.goToHome()
  }

  handleLogout = () => {
    this.goToSignin()
  }

  render() {
    return (
      <div className="App">
        {
          this.state.route === 'home' ? (
            <Fragment>
              <Header handleLogout={this.handleLogout}/>
              <PostTweet />
              <Feed tweets={tweets}/>
            </Fragment>
          ) : (
            this.state.route === 'register' ? (
              <Register handleRegister={this.handleRegister} goToSignin={this.goToSignin}/>
            ) : (
              <SignIn handleSignin={this.handleSignin} goToRegister={this.goToRegister}/>
            )
          )
        }
      </div>
    )
  }
}

export default App;
