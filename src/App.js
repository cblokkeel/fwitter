import React, { Component, Fragment } from 'react'
import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import PostTweet from './components/PostTweet/PostTweet'
import Register from './components/Register/Register'
import SignIn from './components/SignIn/SignIn'
import fire from './firebase'


const auth = fire.auth()
const db = fire.firestore()


class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'signin',
      fweet: '',
      email: '', 
      password: '',
      username: '',
      fweets: []
    }
  }
  
  
  handleChange = e => {
    this.setState({ fweet: e.target.value })
  }
  
  handleSetEmail = e => {
    this.setState({ email: e.target.value })
  }
  
  handleSetPassword = e => {
    this.setState({ password: e.target.value })
  }

  handleSetUsername = e => {
    this.setState({ username: e.target.value })
  }
  
  goTo = (dest) => {
    this.setState({ route: dest })
  }
  
  handlePostTweet = e => {
    const date = new Date().getTime()
    e.preventDefault()
    this.setState({ fweet: '' })
    db.collection('fweets').add({
      author: this.state.username,
      content: this.state.fweet,
      date: date
    })
    this.feedUpdate()
  }
  
  handleRegister = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        db.collection('users').add({
          email: user.user.email,
          uid: user.user.uid,
          username: this.state.username
        })
          .then(() => this.goTo('home'))
      })
      .catch(err => {
        console.log(err.code)
        console.log(err.message)
      })
  }

  feedUpdate = () => {
    let array = []
    db.collection('fweets').orderBy('date').onSnapshot(querySnapshot => {
      querySnapshot.docs.map(fweet => {
        if(!array.includes(fweet.data())) {
          array.push(fweet.data())
        }
      })
      this.setState({ fweets: array.reverse() })
    })
  }

  componentDidMount() {
    this.feedUpdate()
  }
  
  handleSignin = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        db.collection('users').where('uid', '==', user.user.uid).onSnapshot(querySnapshot => {
          querySnapshot.docs.map(user => {
            this.setState({ username: user.data().username })
          })
        })
        this.goTo('home')
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  handleLogout = () => {
    auth.signOut()
    this.goTo('signin')
  }

  render() {
    return (
      <div className="App">
        {
          this.state.route === 'home' ? (
            <Fragment>
              <Header handleLogout={this.handleLogout} username={this.state.username}/>
              <PostTweet handleChange={this.handleChange} handlePostTweet={this.handlePostTweet} value={this.state.fweet}/>
              <Feed fweets={this.state.fweets}/>
            </Fragment>
          ) : (
            this.state.route === 'register' ? (
              <Register handleRegister={() => this.handleRegister(this.state.email, this.state.password)} goToSignin={() => this.goTo('signin')} handleSetEmail={this.handleSetEmail} handleSetPassword={this.handleSetPassword} handleSetUsername={this.handleSetUsername}/>
            ) : (
              <SignIn handleSignin={() => this.handleSignin(this.state.email, this.state.password)} goToRegister={() => this.goTo('register')} handleSetEmail={this.handleSetEmail} handleSetPassword={this.handleSetPassword}/>
            )
          )
        }
      </div>
    )
  }
}

export default App;
