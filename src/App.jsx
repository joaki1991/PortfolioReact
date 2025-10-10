import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import DNAChain from './components/DNAChain'
import NeonParticleBG from './components/NeonParticleBG'
import FloatingCell from './components/FloatingCell'
import './App.css'

function App() {
  return (
    <div className="App">
      <NeonParticleBG count={30} />
      <FloatingCell />
      <Header />
      <DNAChain />
      <main className="dna-main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
