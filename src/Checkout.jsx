import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';
function Checkout() {
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className="checkout">
              <div className="checkout_left">
                  <img className="checkout_ad" src="https://smsh-0-778169-juc1ugur1qwqqqo4.stackpathdns.com/1545644/wp-content/uploads/2019/12/header-image-amazon-brand-stores-1024x204.png?lossy=0&strip=1&webp=1" alt=""/>
                  <div>
                      <h3>Hello, {user? user?.email : 'Guest'}</h3>
                      <h2 className="checkout_title">
                          Your shopping Basket
                      </h2>
                      {/* <FlipMove> */}
                      {basket.map(item=>(
                          <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          price={item.price}
                          image={item.image}
                          rating={item.rating}
                          />
                      ))}
                      {/* </FlipMove> */}
                  </div>
              </div>
              <div className="checkout_right">
                  <Subtotal />
              </div>
        </div>
    )
}

export default Checkout
