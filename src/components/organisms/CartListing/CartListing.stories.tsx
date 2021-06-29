import React from 'react';
import { Story } from '@storybook/react'
import { CartListing, CartListingProps } from '.';
import { DefaultCartItem } from '../../molecules/CartItem/CartItem.stories';

export default {
component: CartListing,
title: 'CartListing'
};

export const DefaultCart:CartListingProps = {
    items: [DefaultCartItem, DefaultCartItem, DefaultCartItem, DefaultCartItem, DefaultCartItem, DefaultCartItem, DefaultCartItem, DefaultCartItem, DefaultCartItem]
}

const Template:Story<CartListingProps> = (args: any) => <CartListing {...args}/>
export const Default = Template.bind({})
Default.args = {
    ...DefaultCart,
}
