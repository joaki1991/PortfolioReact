import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import DNAChain from './components/DNAChain'
import BioParticles from './components/BioParticles'
import './App.css'

function App() {
  return (
    <div className="App">
      <BioParticles count={25} />
      <Header />
      <DNAChain />
      <main className="dna-main">
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
