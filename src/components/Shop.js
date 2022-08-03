import React from "react";
// import "./css/shop.css";

function Shop() {
  return (
    <>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value Deal</h2>
        <h1>On all Products</h1>
        <p>Save more with coupans & up to 70% off!</p>
        <button>SHOP NOW</button>
      </section>

      <section id="feature">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modren Design</p>

        <div class="product" onclick="window.location.href='sproduct.html';">
          <p class="time">New</p>
          <div class="img-box">
            <img src="images/image1.jpg" alt="1" />
          </div>
          <p class="detail">
            Black top
            <a href="#"> Price $ 23/-</a>
          </p>
          <div class="cart">
            <a href="#">Add to Cart</a>
          </div>
        </div>

        <div class="product">
          <p class="time">New</p>
          <div class="img-box">
            <img src="images/image11.jpg" alt="1" />
          </div>
          <p class="detail">
            Black top
            <a href="#"> Price $ 23/-</a>
          </p>
          <div class="cart">
            <a href="#">Add to Cart</a>
          </div>
        </div>

        <div class="product">
          <p class="time">New</p>
          <div class="img-box">
            <img src="images/image22.jpg" alt="1" />
          </div>
          <p class="detail">
            Black top
            <a href="#"> Price $ 23/-</a>
          </p>
          <div class="cart">
            <a href="#">Add to Cart</a>
          </div>
        </div>

        <div class="product">
          <p class="time">New</p>
          <div class="img-box">
            <img src="images/image23.jpg" alt="1" />
          </div>
          <p class="detail">
            Black top
            <a href="#"> Price $ 23/-</a>
          </p>
          <div class="cart">
            <a href="#">Add to Cart</a>
          </div>
        </div>
        
        <div class="product">
          <p class="time">New</p>
          <div class="img-box">
            <img src="images/image14.jpg" alt="1" />
          </div>
          <p class="detail">
            Black top
            <a href="#"> Price $ 23/-</a>
          </p>
          <div class="cart">
            <a href="#">Add to Cart</a>
          </div>
        </div>

        <div class="product">
          <p class="time">New</p>
          <div class="img-box">
            <img src="images/image15.jpg" alt="1" />
          </div>
          <p class="detail">
            Black top
            <a href="#"> Price $ 23/-</a>
          </p>
          <div class="cart">
            <a href="#">Add to Cart</a>
          </div>
        </div>

        <div class="product">
          <p class="time">New</p>
          <div class="img-box">
            <img src="images/image25.jpg" alt="1" />
          </div>
          <p class="detail">
            Black top
            <a href="#"> Price $ 23/-</a>
          </p>
          <div class="cart">
            <a href="#">Add to Cart</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
