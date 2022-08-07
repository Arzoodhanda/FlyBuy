import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Wishlist.css";
import { wishlistArr } from "./Home";

export default function Wishlist() {
  let navigate = useNavigate();

  // const array = ['https://images.unsplash.com/photo-1589710917567-60ca712f0431?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWxlY3Ryb25pY3MsbGFwdG9wc3x8fHx8fDE2NTk3NjIzMzI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600']
  useEffect(() => {
    // const array = ["a", "aa", "bad", "fasdgt", "fasdf"];
    console.log({wishlistArr});
    if(wishlistArr.length===0){

    }
    const list = document.querySelector(".card-container");
    for (let i = 0; i < wishlistArr.length; i++) {
      console.log(wishlistArr[i]);
      // var newName = document.createElement("li")
      // newName.textContent = array[i]
      // newName.textContent = 'a'
      // list.append(newName)
      list.innerHTML += "<div className='card'><img src=" + wishlistArr[i] + "alt='unsplash-picture' style='width: 15rem; height: 20rem; object-fit: cover;'/></div>";
    }
  }, []);

  if(wishlistArr.length===0){
    return (
      <>
      <div className="about">
        <h1>Your WishList</h1>
        <h3>No items are present</h3>
      </div>
      <button
          className="button-85"
          role="button"
          onClick={() => {
            navigate("/");
          }}
          >
          Add more items
        </button>
      </>
    );
  }
  else{

    return (
      <>
      <div className="about">
        <h1>Your WishList</h1>
        <h3>Favorite items are:-</h3>
        <p id="list"></p>
        <button
          className="button-85"
          role="button"
          onClick={() => {
            navigate("/");
          }}
          >
          Add more items
        </button>
        <div className="card-container">
        </div>
      </div>
    </>
  );
}
}
