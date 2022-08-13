import React from "react";
import "./css/Shop.css";
import "./css/Cart.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";
import QtyBtn from "./QtyBtn";

export default function Cart() {
  const removeItem = (e) => {
    console.log(e);
  };

  return (
    <>
      <section id="hero2">
        <h2>#Cart</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <div className="cart-container">
        <div className="cart-product-container">
          <div className="cart-product">
            <div className="cart-img">
              <img src="images/image2.jpg" alt="FlyBuy product" />
            </div>
            <div className="cart-product-detail">
              <div className="product-name-delivery">
                <h4>Product Name</h4>
                <span>Delivery by Mon</span>
              </div>
              <div className="price-qty">
                <span>Rs 299</span>
                <QtyBtn />
              </div>
              <div className="cart-product-icons">
                <span>
                  <i className="fa-solid fa-heart" title="Save For Later"></i>
                </span>
                <span>
                  <i
                    className="fa-solid fa-trash"
                    title="Remove"
                    onClick={removeItem}
                  ></i>
                </span>
              </div>
            </div>
          </div>

          <div className="cart-product">
            <div className="cart-img">
              <img src="images/image15.jpg" alt="FlyBuy product" />
            </div>
            <div className="cart-product-detail">
              <div className="product-name-delivery">
                <h4>Product Name</h4>
                <span>Delivery by Mon</span>
              </div>
              <div className="price-qty">
                <span>Rs 299</span>
                <QtyBtn />
              </div>
              <div className="cart-product-icons">
                <span>
                  <i className="fa-solid fa-heart" title="Save For Later"></i>
                </span>
                <span>
                  <i className="fa-solid fa-trash" title="Remove"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="card-add">
          <div id="coupon">
            <h2>Apply Coupon</h2>
            <input type="text" placeholder="Enter Coupon here" />
            <button>Apply</button>
          </div>

          <div className="subtotal">
            <h3>PRICE DETAILS</h3>
            <div className="more-details">
              <span>Price (2 items)</span>
              <span>Rs 200</span>
            </div>
            <div className="more-details">
              <span>Discount</span>
              <span>- Rs 200</span>
            </div>
            <div className="more-details">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <button>Proceed to checkout</button>
          </div>
        </section>
      </div>
      <Marquee className="marquee" gradient={false} direction="right">
        Thanks for purchasing the product from FlyBuy.
      </Marquee>

      <Footer />
    </>
  );
}
