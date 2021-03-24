import React from "react";
import { Meta, Story } from "@storybook/react";
import { Link as SCLink, LinkProps } from '../src/components/Link';

const meta: Meta = {
    title: 'Link',
    component: SCLink,
}

export default meta;

const Template: Story<LinkProps> = (args) => (
    <SCLink {...args}>{args.children}</SCLink>
)

export const Link = Template.bind({});
Link.args = {
    url: "https://open.spotify.com/track/1EJOWPgFH4ThdIFdvbKA2B?si=Zdo4k4UbRnShLeKTHtDr6Q",
    external: true,
    children: 'Listen Yokohama blues',
}