import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className='container'>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;