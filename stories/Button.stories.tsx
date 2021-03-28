import React from 'react';
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from '../src/components/Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        text: {
            control: {
                type: 'text'
            }
        }
    },
    parameters: {
        controls: { expanded: true },
        backgrounds: {
            default: 'twitter',
            values: [
                {name: 'default', value: '#ffffff'},
                {name: 'dark-theme', value: '#333333'},
            ],
        },
    }
}

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { text: 'Button', variant: 'primary' };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { text: 'Button', variant: 'secondary' }

export const TertitaryButton = Template.bind({});
TertitaryButton.args = { text: 'Button', variant: 'tertiary' }

export const DisabledButton = Template.bind({});
DisabledButton.args = { text: 'Button disabled', variant: 'primary', disabled: true }

export const InvertedButton = Template.bind({})
InvertedButton.args = { text: 'Inverted button', variant: 'inverted' }

InvertedButton.parameters = {
    backgrounds: { default: 'dark-theme' }
}