import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import SocialLink from './Components/SocialLink'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
     <Footer/>
     <SocialLink/>
     
    </div>
  )
}

export default App
