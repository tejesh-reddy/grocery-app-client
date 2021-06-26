import React from 'react';
import { Story } from '@storybook/react'
import { GroceryListing, GroceryListingProps } from '.';
import { DefaultCategory } from '../CategoryListing/CategoryListing.stories';

export default {
component: GroceryListing,
title: 'GroceryListing'
};

export const DefaultGroceryListing = {
    categories: [DefaultCategory, DefaultCategory, DefaultCategory, DefaultCategory]
}
const Template:Story<GroceryListingProps> = (args: any) => <GroceryListing {...args}/>
export const Default = Template.bind({})
Default.args = DefaultGroceryListing
