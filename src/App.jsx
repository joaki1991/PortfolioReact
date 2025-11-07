import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import DNA3D from './components/DNA3D'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <DNA3D />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
