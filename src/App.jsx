import './App.css'
import Navbar from'./components/Navbar'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import About from './pages/About'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return(
    <Router>
      <div className='App'>
      <Navbar />
      <div className='content-container'>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

      </Routes>
      </div>
      </div>
    </Router>
  )
}

export default App
