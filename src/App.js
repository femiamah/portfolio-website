import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;