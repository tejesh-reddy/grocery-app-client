import { useEffect, useState } from "react";
import { getUserCart, updateCart } from "./helpers/Cart";
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

export const useCart = () => {
    let [cart, setCart] = useState<Order|null>(null);

    useEffect(() => {
        setCart(getUserCart())
    }, [])

    const actions = {
        update: (newCart: Order|null) => {
            if(newCart == null) {
                updateCart(null)
            }
            else {
                updateCart(newCart, setCart)
            }
        }
    }

    return [cart, actions]
}