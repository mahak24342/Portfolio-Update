

import React from 'react'
import Nav from './components/Nav'
import Head from './components/Head'
import About from './components/About'
import Projects from './components/Projects'
import Content from './components/Content'
import Contact from './components/Contact'

const page = () => {
  return (
    <div>
      <Nav/>
      <Head/>
      <About/>
      <Projects/>
      <Content/>
      <Contact/>
    </div>
  )
}

export default page
