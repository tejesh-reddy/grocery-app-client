import React from 'react';
import { Story } from '@storybook/react'
import { CategoryListing, CategoryListingProps } from '.';
import { DefaultGrocery } from '../../molecules/GroceryCard/GroceryCard.stories';

export default {
component: CategoryListing,
title: 'CategoryListing'
};

export const DefaultCategory = {
    name: 'Category1',
    items: [DefaultGrocery, DefaultGrocery, DefaultGrocery]
}


const Template:Story<CategoryListingProps> = (args: any) => <CategoryListing {...args}/>
export const Default = Template.bind({})
Default.args = DefaultCategory