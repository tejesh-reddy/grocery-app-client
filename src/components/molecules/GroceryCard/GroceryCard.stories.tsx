import React from 'react';
import { Story } from '@storybook/react'
import { GroceryCard, GroceryCardProps } from '.';

export default {
component: GroceryCard,
title: 'GroceryCard'
};

export const DefaultGrocery:GroceryCardProps = {
    name: 'Grocery',
    unit: '1 Kg',
    cost: 20,
}

const Template:Story<GroceryCardProps> = (args: any) => <GroceryCard {...args}/>
export const Default = Template.bind({})
Default.args = DefaultGrocery
