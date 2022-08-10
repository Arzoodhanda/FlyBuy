import React from 'react'
import './css/Shop.css'
import { name, price, imgSrc } from './Shop'

export default function AddToCart(params) {
  return (
    <>
    <section id="prodetials">
      <div class="single-pro-image">
        <div id="mainImg">
          <img
          // src="images/image7.jpg"
          src = {imgSrc}
          width="100%"
          class="active"
          alt=""
          />
        </div>

        <div id="current-img" class="small-image-group">
          <div class="small-image-col">
			<input name='img1' type="image" src="images/image7.jpg" width="100%" id="smallImg1" alt=""/>
          </div>

          <div class="small-image-col">
			<input name='img2' type="image" src="images/image8.jpg" width="100%" id="smallImg2" alt=""/>
          </div>

          <div class="small-image-col">
			<input name='img3' type="image" src="images/image9.jpg" width="100%" id="smallImg3" alt=""/>
          </div>
        </div>
      </div>
      <div class="single-pro-details">
        <h6>Shop / Shirt</h6>
        <h4>{name}</h4>
        <h2>$ {price}</h2>
        <select>
          <option>Select size</option>
          <option>S</option>
          <option>M</option>
          <option selected>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
        <input type="number" value="1" min="1" max="5" />
        <button class="normal">Add To Cart</button>
        <h4>Product Details</h4>
        <span>dghjfghjertyudsafhdfghjretyuhijxd</span>
      </div>
    </section>
    </>
  )
}
