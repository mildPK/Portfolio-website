import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMore from './components/AboutMore';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* เส้นทางหลักที่มีหน้าเลื่อนลงทั้งหมด */}
        <Route path="/" element={
          <>
            <Navbar /> 
            <Hero />
            <About />
            <Skills />
            <Education />
            <Contact />
            <Footer />
          </>
        } />
        
        {/* เส้นทางใหม่สำหรับหน้า About More */}
        <Route path="/about-more" element={<AboutMore />} />
      </Routes>
    </Router>
  )
}

export default App;
