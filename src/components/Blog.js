import React from 'react'
import "./css/about.css";

export default function Blog() {
  return (
    <>
    <section id="hero1">
      <h2>#readmore</h2>
      <p>Read all case studies about our products!</p>
    </section>

    <section id="blog">
      <div class="blog-box">
        <div class="blog-img">
          <img src="images/image5.jpg" width="50%"/>
        </div>
        <div class="blog-details">
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
      <a href="#"><i class="fa-regular fa-right"></i></a>
    </section>
    </>
  )
}
