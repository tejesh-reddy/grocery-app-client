// helpers for objects of type Order.items (groceries)

import { Item, Order } from "../types"

type args = {
    items: Item[],
    id: number,
}

type superArgs = args & {
    change: (data: number) => number,
}

export const toOrderInput = (cart: Order) => {
    let result:any = {};
    result.status = cart.status;
    result.items = [];


    if(!cart.items){
        return result;
    }

    for(let item of cart.items) {
        result.items.push({
            grocery_id: item.grocery.id,
            quantity: item.quantity,
        })
    }

    return {cart: result};
}

const changeQuantity = (items: any[], grocery: any, change: (data: number) => number) => {
    let result: any[] = []
    let flag = 0;
    for(let item of items) {
        if(item.grocery.id === grocery.id) {
            flag = 1;
            let newQuant = change(item.quantity)
            if(newQuant !== 0)
            {
                result.push({
                    grocery: grocery,
                    quantity: change(item.quantity),
                })
            }
        }
        else {
            result.push({...item})
        }
    }

    if(flag == 0){
        let newQuant = change(0)
        if(newQuant >= 0)
            result.push({grocery, quantity: change(0)})
    }

    console.log('new:', result, change, flag)

    return result;
}

export const reduceQuantity = (items:any[], grocery: any)  => {
    return changeQuantity(items, grocery, (data:number) => data-1)
}

export const increaseQuantity = (items:any[], grocery: any) => {
    return changeQuantity(items, grocery, (data:number) => data+1)
}

export const removeGrocery = (items: any[], grocery: any) => {
    return changeQuantity(items, grocery, (data:number) => 0)
}