import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;