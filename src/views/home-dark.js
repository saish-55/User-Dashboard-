import React from 'react'

import { Helmet } from 'react-helmet'

import SideNavbarDark from '../components/side-navbar-dark'
import TopNavbarDark from '../components/top-navbar-dark'
import MainDark from '../components/main-dark'
import './home-dark.css'

const HomeDark = (props) => {
  return (
    <div className="home-dark-container">
      <Helmet>
        <title>HomeDark - Chilly Substantial Owl</title>
        <meta property="og:title" content="HomeDark - Chilly Substantial Owl" />
      </Helmet>
      <div className="home-dark-body">
        <SideNavbarDark></SideNavbarDark>
        <TopNavbarDark></TopNavbarDark>
        <MainDark rootClassName="main-dark-root-class-name"></MainDark>
      </div>
    </div>
  )
}

export default HomeDark
