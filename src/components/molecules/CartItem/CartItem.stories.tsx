import React from 'react';
import { Story } from '@storybook/react'
import { CartItem, CartItemProps } from '.';
import { DefaultGrocery } from '../GroceryCard/GroceryCard.stories';

export default {
component: CartItem,
title: 'CartItem'
};

export const DefaultCartItem:CartItemProps = {
    grocery: {...DefaultGrocery},
    quantity: 1
}

const Template:Story<CartItemProps> = (args: any) => <CartItem {...args}/>
export const Default = Template.bind({})
Default.args = {
    ...DefaultCartItem,
}
