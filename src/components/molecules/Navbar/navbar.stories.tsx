import { Story } from '@storybook/react';
import React from 'react';
import { Navbar, NavbarProps } from '.';

export default {
component: Navbar,
title: 'Navbar'
};

const Template:Story<NavbarProps> = (args:any) => <Navbar {...args}/>;

export const Default = Template.bind({})
Default.args = {}

export const LoggedIn = Template.bind({})
LoggedIn.args = {isLoggedIn: true,}