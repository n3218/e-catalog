import React from 'react'
import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import CartIcon from './cart-icon.component'


const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden { toggleCartHidden @client }
`
const GET_CART_ITEMS_COUNT = gql`
    { itemCount @client }
`

const CartIconContainer = () => (
    <Query query={GET_CART_ITEMS_COUNT}>
        {({ data: { itemCount } }) => (
            <Mutation mutation={TOGGLE_CART_HIDDEN} >
                {toggleCartHidden =>
                    <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
                }
            </Mutation>
        )}
    </Query>
)


export default CartIconContainer