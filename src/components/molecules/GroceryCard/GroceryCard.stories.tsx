import React from 'react';
import { Story } from '@storybook/react'
import { GroceryCard, GroceryCardProps } from '.';

export default {
component: GroceryCard,
title: 'GroceryCard'
};

export const DefaultGrocery:GroceryCardProps = {
    groceryById: {
        id: 1,
        name: 'Grocery',
        unit: '1 Kg',
        cost: 20,
    },
    addHandler: () => console.log('adding'),
    reduceHandler: () => console.log('removing'),
    quantity: 1,
}

const Template:Story<GroceryCardProps> = (args: any) => <GroceryCard {...args}/>
export const Default = Template.bind({})
Default.args = DefaultGrocery
