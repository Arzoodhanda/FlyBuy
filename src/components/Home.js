import React, { useEffect, useState } from "react";
import "./css/home.css";
import "./css/spinner.css";
import Spinner from "./Spinner";

export const array = [];
export const wishlistArr = [];

export default function Home() {
  useEffect(() => {
    initCards();
    fetchUrl();
  }, []);

  const [loading, setLoading] = useState(true);

  const allCards = document.querySelectorAll(".tinder--card");

  function initCards() {
    let newCards = document.querySelectorAll(".tinder--card:not(.removed)");

    newCards.forEach(function (card, index) {
      card.style.zIndex = allCards.length - index;
      card.style.transform =
        "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
      card.style.opacity = (10 - index) / 10;
    });

    document.querySelector(".tinder").classList.add("loaded");
  }

  function createButtonListener(love) {
    return function (event) {
      let cards = document.querySelectorAll(".tinder--card:not(.removed)");
      let moveOutWidth = document.body.clientWidth * 1.5;

      if (!cards.length) return false;

      let card = cards[0];
      card.classList.add("removed");
      
      if (love) {
        card.style.transform =
        "translate(" + moveOutWidth + "px, -100px) rotate(-30deg)";
        // let arr = card.innerHTML.split(" ");
        let index = Math.abs(cards.length - 5);
        console.log(Math.abs(cards.length - 5));
        wishlistArr.push(array[index]);
        console.log(wishlistArr)
        // let splt = arr[1].split('src=')
        // console.log(card)
        // console.log(arr[1])
        // console.log(splt[1])
        // cardUrl(splt[1])
      } else {
        card.style.transform =
        "translate(-" + moveOutWidth + "px, -100px) rotate(30deg)";
      }
      if (cards.length === 1) {
        console.log("cards finished");
        document.getElementById("shop-cart").remove();
        document.getElementById("nope").remove();
        document.getElementById("love").remove();
        document.getElementById("info").remove();
        window.location.reload(true);
      }
      initCards();
      // event.preventDefault();
    };
  }
  let nopeListener = createButtonListener(false);
  let loveListener = createButtonListener(true);

  async function fetchUrl() {
    let imgResponse = await fetch(
      "https://source.unsplash.com/600x300/?electronics,laptops"
    );
    array.push(imgResponse.url);
    imgResponse = await fetch(
      "https://source.unsplash.com/600x300/?electronics,accessories"
    );
    array.push(imgResponse.url);
    imgResponse = await fetch(
      "https://source.unsplash.com/600x300/?electronics,headphones"
    );
    array.push(imgResponse.url);
    imgResponse = await fetch(
      "https://source.unsplash.com/600x300/?electronics,mobile"
    );
    array.push(imgResponse.url);
    imgResponse = await fetch(
      "https://source.unsplash.com/600x300/?electronics,pc"
    );
    array.push(imgResponse.url);
    // console.log(array[0])
    // console.log(array[1])
    // console.log(array[2])
    // console.log(array[3])
    // console.log(array[4])
    setLoading(false);
  }

  return (
    <>
      {/* <Alert/> */}
      <div className="tinder">
        <div className="tinder--cards">
          <div className="tinder--card">
            <img
              src={array[0]}
              alt="card"
            />
            <h3>Product Name</h3>
            <p>Product's description will be written here.</p>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail">
                <i class="fa-solid fa-share"></i>
              </li>
              <li id="avail">
                <i class="fa-solid fa-location-dot"></i> Deliverable
              </li>
            </div>
          </div>

          <div className="tinder--card">
            <img
              src={array[1]}
              alt="card"
            />
            <h3>Product Name</h3>
            <p>Product's description will be written here.</p>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail">
                <i class="fa-solid fa-share"></i>
              </li>
              <li id="avail">
                <i class="fa-solid fa-location-dot"></i> Deliverable
              </li>
            </div>
          </div>

          <div className="tinder--card">
            <img
              src={array[2]}
              alt="card"
            />
            <h3>Product Name</h3>
            <p>Product's description will be written here.</p>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail">
                <i class="fa-solid fa-share"></i>
              </li>
              <li id="avail">
                <i class="fa-solid fa-location-dot"></i> Deliverable
              </li>
            </div>
          </div>

          <div className="tinder--card">
            <img
              src={array[3]}
              alt="card"
            />
            <h3>Product Name</h3>
            <p>Product's description will be written here.</p>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail">
                <i class="fa-solid fa-share"></i>
              </li>
              <li id="avail">
                <i class="fa-solid fa-location-dot"></i> Deliverable
              </li>
            </div>
          </div>

          <div className="tinder--card">
            <img
              src={array[4]}
              alt="card"
            />
            <h3>Product Name</h3>
            <p>Product's description will be written here.</p>
            <div className="product-info">
              <li className="price">&#8377; 45000</li>
              <li id="avail">
                <i class="fa-solid fa-share"></i>
              </li>
              <li id="avail">
                <i class="fa-solid fa-location-dot"></i> Deliverable
              </li>
            </div>
          </div>
        </div>

        <Spinner loading={loading} />

        <div className="tinder--buttons">
          <button
            id="shop-cart"
            title="Add to Cart"
            onClick={() => {
              // addToCart();
            }}
          >
            <i className="uil uil-shopping-cart-alt"></i>
          </button>
          <button
            id="nope"
            title="Reject"
            onClick={() => {
              nopeListener();
            }}
          >
            <i className="uil uil-multiply"></i>
          </button>
          <button
            id="love"
            title="Accept"
            onClick={() => {
              loveListener();
            }}
          >
            <i className="uil uil-heart-alt"></i>
          </button>
          <button>
            <span
              id="info"
              title="Info."
              onMouseOver={() => {
                alert("info 12");
              }}
            >
              <i className="uil uil-info-circle"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
