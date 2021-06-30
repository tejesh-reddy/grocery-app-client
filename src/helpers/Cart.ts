import { useMutation, useQuery } from "react-apollo"
import { GET_USER } from "../apollo/Queries/Profile"
import { Order } from "../types";

export const getUserCart = () => {
    const {loading, error, data} = useQuery(GET_USER)
    if(error) {
        return null;
    }

    if(!loading){
        return data.user.cart;
    }
}

export const updateCart = (newCart: Order|null, resolve?: (data:any) => any) => {
    const [updateCart] = useMutation(GET_USER)
    const [clearCart] = useMutation(GET_USER)

    if(newCart){
        updateCart({variables: {cart:{...newCart}}})
        .then(data => resolve(data))
    }
    else{
        clearCart()
    }

}