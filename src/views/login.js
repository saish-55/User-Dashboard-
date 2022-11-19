import React from 'react'

import { Helmet } from 'react-helmet'

import LoginsideNavbarHome from '../components/loginside-navbar-home'
import LoginpageHome from '../components/loginpage-home'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Chilly Substantial Owl</title>
        <meta property="og:title" content="Login - Chilly Substantial Owl" />
      </Helmet>
      <LoginsideNavbarHome></LoginsideNavbarHome>
      <LoginpageHome rootClassName="loginpage-home-root-class-name"></LoginpageHome>
    </div>
  )
}

export default Login
