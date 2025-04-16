import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

import About from './pages/About'

import Home from './pages/Home';

function App() {

  return (
    <Router basename="/ggits-webclone/">
      <div className="app">
        <Header />
      <HeroSection />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-ggits" element={<About />} />
            <Route path="/academics" element={
              <div className="container">
                <h1>Academics</h1>
                <p>Coming Soon</p>
              </div>
            } />
            <Route path="/admissions" element={
              <div className="container">
                <h1>Admissions</h1>
                <p>Coming Soon</p>
              </div>
            } />
            <Route path="/campus-life" element={
              <div className="container">
                <h1>Campus Life</h1>
                <p>Coming Soon</p>
              </div>
            } />
            <Route path="/contact" element={
              <div className="container">
                <h1>Contact</h1>
                <p>Coming Soon</p>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
