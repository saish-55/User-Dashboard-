import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LoginDark from './views/login-dark'
import Login from './views/login'
import Home from './views/home'
import HomeDark from './views/home-dark'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={LoginDark} exact path="/login-dark" />
        <Route component={Login} exact path="/login" />
        <Route component={Home} exact path="/" />
        <Route component={HomeDark} exact path="/home-dark" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
