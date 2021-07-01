import { useMutation, useQuery } from "react-apollo"
import { ADDTO_CART, CLEAR_CART } from "../apollo/Queries/Cart";
import { GET_CART, GET_USER } from "../apollo/Queries/Profile"
import { Grocery, Item, Order, OrderInput } from "../types";
import { increaseQuantity, reduceQuantity, removeGrocery, toOrderInput } from "./ObjectHelpers";




export const updateUserCart = (newCart: Order|null, updateCart: any, clearCart: any, resolve?: (data:any) => any) => {

    if(newCart && resolve){
        updateCart({variables: toOrderInput(newCart)})
        .then((data: any) => resolve({...data}))
    }
    else{
        clearCart()
    }

}

export const getQuantity = (cart: Order, id: number) => {
    let result = (cart && cart.items)? cart.items.filter(item => item.grocery.id === id) : [];
    if(result.length > 0){
        return result[0].quantity
    }
    return 0;
}

const toOrder = (items: Item[]) => {
    return {
        status: 'cart',
        items,
    }
}

// Gives increase and decrease handlers for groceries
export const getChangeHandlers = (action: "DEC"|"INC"|"REMOVE", grocery:Grocery, updateHandler: any, cart: Order) => {

    let result:Order = {...cart}


    // new item
    if((cart == null || cart.items?.length === 0) && action === "INC") {
        const newGrocery = {grocery, quantity: 0}
        result.items = increaseQuantity([newGrocery], grocery)
        return updateHandler(result)
    }
    else if(action == "DEC"){
        result.items = reduceQuantity(cart.items, grocery)
    }
    else if(action == "INC") {
        result.items = increaseQuantity(cart.items, grocery)
    }
    else{
        result.items = removeGrocery(cart.items, grocery)
    }



    updateHandler(result)
}