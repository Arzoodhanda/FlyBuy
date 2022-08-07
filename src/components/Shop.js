import React from "react";
import "./css/Shop.css";

export default function Shop() {
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

      <div className="product" onclick="window.location.href='sproduct.html';">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image1.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image11.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image22.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>
      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image23.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>
      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image14.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image15.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image25.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>
    </section>

    <section className="banner">
      <h4>Repair Services</h4>
      <h2>Up to <span>70% Off</span> All the T-Shirt & Accessories</h2>
      <button className="normal">Explore More</button>
    </section>

    <section id="feature">
      <h2>New Arrivals</h2>
      <p>Summer Collection New Modren Design</p>
      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image7.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image1.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image1.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image1.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>
    </section>

    <section id="feature">
      <h2>Beg collection</h2>
      <p>Beg Collection New Modren Design</p>
      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image9.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image14.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image1.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>

      <div className="product">
        <p className="time">New</p>
        <div className="img-box">
          <img src="images/image1.jpg" alt="1" />
        </div>
        <p className="detail">Black top <a href="#"> Price $ 23/-</a></p>
        <div className="cart">
          <a href="#">Add to Cart</a>
        </div>
      </div>
    </section>

    <section id="sm-banner" className="section-p1">
      <div className="banner-box">
        <h4>Crazy Deals</h4>
        <h2>Buy 1 get 1 free</h2>
        <span>The best classic dress is on sale at Zara</span><br /><br />
        <button className="white">Learn More</button>
      </div>
      <div className="banner-box1">
        <h4>Spring Summer</h4>
        <h2>Upcoming Season</h2>
        <span>The best classic dress is on sale at Zara</span><br /><br />
        <button className="white">Collection</button>
      </div>
    </section>

    <section id="banner3">
      <div className="banner-box">
        <h2>Season SALE</h2>
        <h3>Winter Collection -50% OFF</h3>
      </div>
      <div className="banner-box banner-box2">
        <h2>NEW FOOTWEAR COLLECTION</h2>
        <h3>Spring / Summer New Collection</h3>
      </div>
      <div className="banner-box banner-box3">
        <h2>T - SHIRTS</h2>
        <h3>New Trendy Prints</h3>
      </div>
    </section>
    </>
  );
}