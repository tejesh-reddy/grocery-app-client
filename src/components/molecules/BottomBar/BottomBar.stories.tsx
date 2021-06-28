import React from 'react';
import { Story } from '@storybook/react'
import { BottomBar, BottomBarProps } from '.';

export default {
component: BottomBar,
title: 'BottomBar'
};

const Template:Story<BottomBarProps> = (args: any) => <BottomBar {...args}/>
export const Default = Template.bind({})
Default.args = {}
