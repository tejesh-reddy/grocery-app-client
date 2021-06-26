import React from 'react';
import { Story } from '@storybook/react'
import { Banner, BannerProps } from '.';

export default {
component: Banner,
title: 'Banner'
};

export const DefaultBanner = {
    images: ["https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_210621_Bangalore.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_cm_460_260621.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_c&h_m_bbhome_460_250621.jpg",
]
}

const Template:Story<BannerProps> = (args: any) => <Banner {...args}/>
export const Default = Template.bind({})
Default.args = DefaultBanner
