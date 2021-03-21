import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from "../src/components/Text";

const meta: Meta = {
    title: 'Typography',
    component: Text,
}

export default meta;

const Template: Story<TextProps> = () => <div>
    <Text variant="h1">Heading 1</Text>
    <Text variant="h2">Heading 2</Text>
    <Text variant="h3">Heading 3</Text>
    <Text variant="h4">Heading 4</Text>
    <Text variant="h5">Heading 5</Text>
    <Text variant="p">texto</Text>
    <Text variant='small'>small text</Text>
</div>

export const DefaultTypography = Template.bind({})