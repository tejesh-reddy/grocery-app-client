import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { ADDTO_CART, CLEAR_CART } from "./apollo/Queries/Cart";
import { GET_CART } from "./apollo/Queries/Profile";
import { updateUserCart } from "./helpers/Cart";
import { Order } from "./types";


export const useLogin = (loggedIn: Boolean) => {
    let [login, setLogin] = useState<Boolean>(loggedIn);

    const loginAction = () => {
        setLogin(true)
    }

    const logoutAction = () => {
        setLogin(false)
    }

    const actions = {
        login: loginAction,
        logout: logoutAction,
    }

    return [login, actions];
}

export const useCart = (updateCart: any, clearCart: any) => {

    let [cart, setCart] = useState<Order|null>(null);

    const {loading, error, data} = useQuery(GET_CART)

   

    useEffect(() => {
        if(data !== undefined){
            setCart(data.user.cart);
        }
    }, [data])


    const actions = {
        update: (newCart: Order|null) => {
            updateUserCart(newCart, updateCart, clearCart, (data) => {setCart({...data.data.updateCart})})
        }
    }

    return [cart, actions]
}
