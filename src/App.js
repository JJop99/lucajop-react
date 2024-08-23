import "./styles/globals.sass";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Works from './pages/Works';
import WorkId from './pages/WorkId';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <header className="App-header">
            <title>Luca Jop</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon_io/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
          
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:workId" element={<WorkId />} />
          </Routes>
        </Layout>
      </Router>
    </div>
    
  );
}

export default App;
