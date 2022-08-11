import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import "./css/Blog.css";

export default function Blog() {  
  // let width =  (document.body.clientWidth)/24.5;
  // document.getElementById('hero1').style.height = "auto";
  return (
    <>
    <section id="hero1">
      <h2>#readmore</h2>
      <p>Read all case studies about our products!</p>
    </section>

    <section id="blog">
      <h1>Date - 13/02</h1>
      <div className="blog-box">
        <img src="images/image5.jpg" alt='blog-img'/>
        <div className="blog-details">
          <h2>How To DIY Your Own Set Of Distressed Denims at Home</h2>
          <p>The trend of distressed denims has taken over the world.Denim is something that you can easily pair with your top, frock, Kurti, etc.</p>
          <Link to="#">Read more</Link>
        </div>
      </div>
    </section>


    <section id="pagination">
      <Link to="#">1</Link>
      <Link to="#">2</Link>
      <Link to="#"><i className="fa-solid fa-angle-right"></i></Link>
    </section>

    <Footer/>
    </>
  )
}
