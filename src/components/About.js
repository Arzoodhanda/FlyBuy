import React from 'react'
import Footer from './Footer';
import "./css/About.css";
import Marquee from "react-fast-marquee"

export default function About() {
  return (
    <>
    {/* <div className="about">
      <h1>About Us</h1>
      <h3>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h3>
      <p>Be it clothing, footwear or accessories, FlyBuy offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
      <p>FlyBuy is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</p>

      <h3>AFFORDABLE FASHION AT YOUR FINGERTIPS</h3>
      <p>FlyBuy is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>
      <h3>FlyBuy App</h3>
      <p>FlyBuy, India's no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the FlyBuy shopping app has managed to keep up without any hiccups. In addition, FlyBuy has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The FlyBuy Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the FlyBuy app. Download the FlyBuy app on your Android or IOS device today and experience shopping like never before!</p>
    </div> */}

<section className="about-header">
      <h2>#Know Us</h2>
      <h3>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h3>
      <p>Be it clothing, footwear or accessories, FlyBuy offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
      <p>FlyBuy is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</p>

</section>

<section className="about-head">
	<img src="images/pic1.jpg" alt="1"/>
		<div>
      <h2>FlyBuy App</h2>
      <p>FlyBuy, India's no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the FlyBuy shopping app has managed to keep up without any hiccups. In addition, FlyBuy has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The FlyBuy Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the FlyBuy app. Download the FlyBuy app on your Android or IOS device today and experience shopping like never before!</p>
    
			<abbr title="India's No.1 shopping website"><strong>FlyBuy-India.com</strong></abbr>
			<br/>
			<br/>
      <br/>
			<Marquee className='marquee' gradient={false} direction='right'>Create stunning image with as much or as little control as you like thanks to a choice of Basic and Creative modes.</Marquee>
		</div>
</section>

<Footer/>
    </>
  )
}
