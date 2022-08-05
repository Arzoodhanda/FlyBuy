import React, { useEffect, useState } from "react";
import "./css/home.css";
import "./css/spinner.css";
import Spinner from "./Spinner";
import Wishlist from "./Wishlist";

export default function Home() {
  useEffect(() => {
    // const timer = setTimeout(() => {
    //     console.log('UseEffect running!')
    //   }, 100);
    // console.log(allCards);
    initCards();
    fetchUrl();
  }, []);

  const [loading, setLoading] = useState(true)
  const array = []

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

      if (cards.length === 1) {
        console.log("cards finished");
        document.getElementById("shop-cart").remove();
        document.getElementById("nope").remove();
        document.getElementById("love").remove();
        document.getElementById("info").remove();
        window.location.reload(true);
      }
      let card = cards[0];
      card.classList.add("removed");

      if (love) {
        card.style.transform =
          "translate(" + moveOutWidth + "px, -100px) rotate(-30deg)";
          let arr = card.innerHTML.split(" ")
          let splt = arr[1].split('src=')
          // console.log(arr[1])
          // console.log(splt[1])
          // cardUrl(splt[1])
      } else {
        card.style.transform =
          "translate(-" + moveOutWidth + "px, -100px) rotate(30deg)";
      }
      initCards();
      // event.preventDefault();
    };
  }
  let nopeListener = createButtonListener(false);
  let loveListener = createButtonListener(true);

  let addToCart = ()=>{
    // document.querySelector('.tinder').
  }
//   if(spinner===1){
//     document.body.innerHTML="<div className='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";
//     const timer = setTimeout(() => {
//         console.log('This will run after 2 second!')
//         setSpinner(0);
//     }, 2000);
// }
// if(spinner===0){
//       console.log('This will run after 3 second!')
//     document.body.innerHTML="<h1>hi</h1>";
//   }
async function fetchUrl(){
    let imgResponse = await fetch('https://source.unsplash.com/600x300/?electronics,laptops')
    array.push(imgResponse.url)
    imgResponse = await fetch('https://source.unsplash.com/600x300/?electronics,accessories')
    array.push(imgResponse.url)
    imgResponse = await fetch('https://source.unsplash.com/600x300/?electronics,headphones')
    array.push(imgResponse.url)
    imgResponse = await fetch('https://source.unsplash.com/600x300/?electronics,mobile')
    array.push(imgResponse.url)
    imgResponse = await fetch('https://source.unsplash.com/600x300/?electronics,pc')
    array.push(imgResponse.url)
    // console.log(imgResponse.url)
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
    console.log(array[3])
    console.log(array[4])
    setLoading(false)
}

  return (
    <>
    {/* <Alert/> */}
      <div className="tinder">
        <div className="tinder--cards">
          <div className="tinder--card">
            <img
              src="https://source.unsplash.com/600x300/?electronics,laptops"
              alt="card"
            />
            <h3>Laptops</h3>
            <p>This is a Tinder wala swipe card.</p>
          </div>

          <div className="tinder--card">
            <img
              src="https://source.unsplash.com/600x300/?electronics,accessories"
              alt="card"
            />
            <h3>Accessories</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>

          <div className="tinder--card">
            <img
              src="https://source.unsplash.com/600x300/?electronics,headphones"
              alt="card"
            />
            <h3>Headphones</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>

          <div className="tinder--card">
            <img
              src="https://source.unsplash.com/600x300/?electronics,mobile"
              alt="card"
            />
            <h3>Mobile</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>

          <div className="tinder--card">
            <img
              src="https://source.unsplash.com/600x300/?electronics,pc"
            //   {let loading = await fetch(src);}
              alt="card"
            />
            <h3>Pc's</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>
        </div>
        <Spinner loading={loading}/>

        <div className="tinder--buttons">
          <button id="shop-cart" title="Add to Cart" onClick={()=>{addToCart();}}>
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
