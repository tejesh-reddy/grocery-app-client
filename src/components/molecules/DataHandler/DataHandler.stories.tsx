import React from 'react';
import { Story } from '@storybook/react'
import { DataHandler, DataHandlerProps } from '.';

export default {
component: DataHandler,
title: 'DataHandler'
};

const Template:Story<DataHandlerProps> = (args: any) => <DataHandler {...args}/>
export const Default = Template.bind({})
Default.args = {}
