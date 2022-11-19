import React from 'react'

import { Helmet } from 'react-helmet'

import SideNavbarHome from '../components/side-navbar-home'
import TopNavbarHome from '../components/top-navbar-home'
import MainHome from '../components/main-home'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chilly Substantial Owl</title>
        <meta property="og:title" content="Chilly Substantial Owl" />
      </Helmet>
      <div className="home-body">
        <SideNavbarHome></SideNavbarHome>
        <TopNavbarHome></TopNavbarHome>
        <MainHome rootClassName="main-home-root-class-name"></MainHome>
      </div>
    </div>
  )
}

export default Home
