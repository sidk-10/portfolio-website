import React from 'react'
import { Helmet } from 'react-helmet'


import Navbar from '../components/navbar'
import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

/*
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js'*/
import '../styles/global.css'


const IndexPage = () => (
    <div className="container">
    	<Helmet title="Siddharth Kulkarni" />
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>

)

export default IndexPage
