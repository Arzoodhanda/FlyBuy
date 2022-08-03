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

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className='container'>
      <Routes>
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;