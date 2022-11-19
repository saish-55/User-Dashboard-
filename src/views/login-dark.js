import React from 'react'

import { Helmet } from 'react-helmet'

import LoginsideNavbarDark from '../components/loginside-navbar-dark'
import LoginpageDark from '../components/loginpage-dark'
import './login-dark.css'

const LoginDark = (props) => {
  return (
    <div className="login-dark-container">
      <Helmet>
        <title>LoginDark - Chilly Substantial Owl</title>
        <meta
          property="og:title"
          content="LoginDark - Chilly Substantial Owl"
        />
      </Helmet>
      <LoginsideNavbarDark></LoginsideNavbarDark>
      <LoginpageDark rootClassName="loginpage-dark-root-class-name"></LoginpageDark>
    </div>
  )
}

export default LoginDark
