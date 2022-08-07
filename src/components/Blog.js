import React from 'react'
import "./css/Blog.css";

export default function Blog() {
  let width =  (document.body.clientWidth)/24.5;
  // document.getElementById('hero1').style.height = "auto";
  return (
    <>
    <section id="hero1">
      <h2>#readmore</h2>
      <p>Read all case studies about our products!</p>
    </section>

    <section id="blog">
      <div className="blog-box">
        <div className="blog-img">
          <img src="images/image5.jpg" width="50%"/>
        </div>
        <div className="blog-details">
          <h4>How To DIY Your Own Set Of Distressed Denims at Home</h4>
          <p>The trend of distressed denims has taken over the world.Denim is something that you can easily pair with your top, frock, Kurti, etc.</p>
          <a href="#">Read more</a>
        </div>
        <h1>13/02</h1>
      </div>
    </section>


    <section id="pagination">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#"><i className="fa-solid fa-angle-right"></i></a>
    </section>
    </>
  )
}
