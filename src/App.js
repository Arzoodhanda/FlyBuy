import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Footer from './components/Footer';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import AddToCart from './components/AddToCart';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/wishlist" element={<Wishlist/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/addtocart/:id" element={<AddToCart/>}/>
          <Route path="*" element={<Home/>}/>
      </Routes>
      {/* <Footer/> */}
      </div>
    </Router>
    </>
  );
}

export default App;