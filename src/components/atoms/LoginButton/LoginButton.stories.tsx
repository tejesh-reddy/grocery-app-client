import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LoginButton, LoginButtonProps } from '.';

export default {
component: LoginButton,
title: 'LoginButton'
} as Meta;

const Template:Story<LoginButtonProps> = (args:any) => <LoginButton {...args}/>;

export const Default = Template.bind({})

Default.args = {}

