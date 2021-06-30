import React from 'react';
import { Story } from '@storybook/react'
import { Grocery, GroceryProps } from '.';

export default {
component: Grocery,
title: 'Grocery'
};

const Template:Story<GroceryProps> = (args: any) => <Grocery {...args}/>
export const Default = Template.bind({})
Default.args = {}
