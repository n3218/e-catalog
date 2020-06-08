import React from 'react'
import { graphql } from 'react-apollo'
import { flowRight } from 'lodash';
import { gql } from 'apollo-boost'
import CartDropdown from './cart-dropdown.component'


const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden { toggleCartHidden @client }
`
const GET_CART_ITEMS = gql`
    { cartItems @client }
`
const CartDropdownContainer = ({ data: { cartItems }, toggleCartHidden }) => (
    <CartDropdown
        cartItems={cartItems}
        toggleCartHidden={toggleCartHidden} />
)


export default flowRight(
    graphql(GET_CART_ITEMS),
    graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' })
)(CartDropdownContainer)