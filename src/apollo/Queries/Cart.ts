import {gql} from 'graphql-tag';

export const ADDTO_CART = gql`
    mutation addToCart($cart: OrderInput!){
        updateCart(cart: $cart){
            id
            status
            items{
                grocery{
                    id
                }
                quantity
            }
        }
    }
`;

export const CLEAR_CART = gql`
    mutation removeCart{
        emptyCart
    }
`;