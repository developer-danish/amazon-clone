import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useState} from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider'
function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const handleChange = (e) =>{
        setDisabled(e.empty);
        setError(e.error? e.error.message : "")
    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout(
                     <Link to="checkout">{basket?.length} items</Link>
                    )</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Developer Danish</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                            <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                    <p>Subtotal ({basket.length} items):<strong>{value}</strong></p>
                                     
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing? <p>processing</p> : "Buy Now"}</span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
