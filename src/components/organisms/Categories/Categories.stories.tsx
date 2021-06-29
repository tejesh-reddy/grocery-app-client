import React from 'react';
import { Story } from '@storybook/react'
import { Categories, CategoriesProps } from '.';

export default {
component: Categories,
title: 'Categories'
};

const Template:Story<CategoriesProps> = (args: any) => <Categories {...args}/>
export const Default = Template.bind({})
Default.args = {}
