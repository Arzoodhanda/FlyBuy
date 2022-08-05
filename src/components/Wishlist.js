import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/wishlist.css";

export default function Wishlist(props) {
  let navigate = useNavigate();

  // const wishlistArray = [];
  // wishlistArray.push(props.added);
  return (
    <>
    <div className="about">
      <h1>Your WishList</h1>
      <h3>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h3>
      <p>Be it clothing, footwear or accessories, FlyBuy offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
      <p>FlyBuy is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</p>

      <h3>AFFORDABLE FASHION AT YOUR FINGERTIPS</h3>
      <p>You can add your favorite items here</p>
      <h3>FlyBuy App</h3>
      <p>FlyBuy, India's no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the FlyBuy shopping app has managed to keep up without any hiccups. In addition, FlyBuy has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The FlyBuy Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the FlyBuy app. Download the FlyBuy app on your Android or IOS device today and experience shopping like never before!</p>
      <button className="button-85" role="button" onClick={()=>{navigate('/')}}>Add more items</button>
    </div>
    </>
  )
}
