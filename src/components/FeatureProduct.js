import React from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../data.json";
import './css/Shop.css'

export default function FeatureProduct() {

    let navigate = useNavigate()

    const goTo = (product) => {
        console.log(data)
        // window.open(window.location.origin + "/addtocart", '_blank', 'toolbar=0,location=0,menubar=0');
        // window.open(window.location.origin + "/addtocart", '_blank');

        // window.open(`/addtocart/${product.id}`)
        navigate(`/addtocart/${product.id}`)
    };
      
// Shuffle the product items.
if(data){
     data = data
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      console.log(data)
}

  return (
    <div id="feature">
      {
      data && data.map((product) => {
          return (
            <div className="product" target="_blank" onClick={()=>{goTo(product)}} key={product.id}>
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
          );
        })}
    </div>
  );
}
