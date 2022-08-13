import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data.json";
import "./css/Carousel.css";
import './css/Shop.css'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
const [viewCard, setViewCard] = useState(5)
  const [screenSize, setScreenSize] = useState(document.body.clientWidth.target);
  useEffect(() => {
    window.addEventListener('resize', setScreenSize);
  console.log(screenSize)

  if(document.body.clientWidth >= 1519)
    {setViewCard(5)}
  else if((document.body.clientWidth <= 1519) && (document.body.clientWidth >= 1225))
    {setViewCard(4)}
  else if((document.body.clientWidth <= 1225) && (document.body.clientWidth >= 920))
    {setViewCard(3)}
  else if((document.body.clientWidth <= 920) && (document.body.clientWidth >= 607))
    {setViewCard(2)}
  // else if((document.body.clientWidth <= 600) && (document.body.clientWidth >= 0))
  //   {setViewCard(1)}
  else
    {setViewCard(1)}

    return(() => {
        window.removeEventListener('resize', setScreenSize);
    })
  }, [screenSize])


  let navigate = useNavigate()
    const [name, setName] = useState()

    const goTo = (product) => {
        setName(product.name)
        // let price = product.price
        // let img = product.img
        // window.open(window.location.origin + "/addtocart", '_blank', 'toolbar=0,location=0,menubar=0');
        // window.open(window.location.origin + "/addtocart", '_blank');
        navigate("/addtocart", {name: name})
    };

//   if(data){
//     data = data
//      .map(value => ({ value, sort: Math.random() }))
//      .sort((a, b) => a.sort - b.sort)
//      .map(({ value }) => value)
//      console.log(data)
// }

  return (
    <>
    {/* This is used to check the width of the client machine */}
    {/* <div><center>Width: `${document.body.clientWidth}`</center></div> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={1}
        slidesPerView={viewCard}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div>
        {
          data && data.map((product) => {
            return (
            <SwiperSlide className="slides" key={product.id}>
            <div className="product" target="_blank" onClick={()=>{goTo(product)}}>
              <div className="img-box">
                <img src={product.img} alt={product.id} />
              </div>
              <p className="detail">
                {product.name}<Link to="">Price: $ {product.price} /-</Link>
              </p>
              <div className="cart">
                <Link to="">Add to Cart</Link>
              </div>
            </div>
        </SwiperSlide>
          );
        })}
        </div>
      </Swiper>
    </>
  );
}
