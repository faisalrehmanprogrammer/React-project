import React  from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact'
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Work from './Components/Work'

function App() {


  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>

    
  )
}

export default App
