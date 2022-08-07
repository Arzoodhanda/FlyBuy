import React from 'react'
import "./css/Shop.css"

export default function Cart() {
  return (
    <>
    <section id="hero2">
		<h2>#Cart</h2>
		<p>Read all case studies about our products!</p>
</section>



<section id="cart">
	<table width="100%">
		<thead>
			<tr>
				<td>Remove</td>
				<td>Images</td>
				<td>Product</td>
				<td>Price</td>
				<td>Quantity</td>
				<td>Subtotal</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><a href="#"><i className="far fa-times-circle"></i></a></td>
				<td><img src="images/image2.jpg"/></td>
				<td>woolen top</td>
				<td>$110.19</td>
				<td><input type="number" value="1"/></td>
				<td>$100.19</td>
			</tr>
			<tr>
				<td><a href="#"><i className="far fa-times-circle"></i></a></td>
				<td><img src="images/image7.jpg"/></td>
				<td>White shirt</td>
				<td>$112.09</td>
				<td><input type="number" value="1"/></td>
				<td>$102.09</td>
			</tr>
			<tr>
				<td><a href="#"><i className="far fa-times-circle"></i></a></td>
				<td><img src="images/image9.jpg"/></td>
				<td>Leather beg</td>
				<td>$230.11</td>
				<td><input type="number" value="1"/></td>
				<td>$230.11</td>
			</tr>
		</tbody>
	</table>
</section>

<section id="card-add">
	<div id="coupon">
		<h3>Apply Coupon</h3>
		<div><input type="text" placeholder="Apply Coupon"/></div>
		<button>Apply</button>
	</div>
	<div id="Subtotal">
		<h3>Cart Totals</h3>
		<table>
			<tr>
				<td>Cart Subtotal</td>
				<td>$350.30</td>
			</tr>
			<tr>
				<td>Shipping</td>
				<td>Free</td>
			</tr>
			<tr>
				<td><strong>Total</strong></td>
				<td><strong>$350.30</strong></td>
			</tr>
		</table>
		<button>Proceed to checkout</button>
	</div>

</section>
    </>
  )
}
