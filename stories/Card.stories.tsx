import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, CardProps } from "../src/components/Card";

const meta: Meta = {
    title: 'Card',
    component: Card,
}

export default meta;

const content = <div className='p-4'><p>渋谷区</p></div>

const Template: Story<CardProps> = (args) => <Card {...args} />

export const DefaultCard = Template.bind({});

DefaultCard.args = { children: content }
