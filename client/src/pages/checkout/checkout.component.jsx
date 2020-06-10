import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/strip-button/strip-button.component';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
            {cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning'>
            *Please use the folloving test credit card for payment*
            <br/>
            4242424242424242 - Exp: Any future date - CVC: Any 3 digits	
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);