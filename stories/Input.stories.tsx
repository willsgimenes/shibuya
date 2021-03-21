import React, { useState, useRef } from 'react';
import { Meta, Story } from "@storybook/react";
import { Input, InputProps } from '../src/components/Input';

const meta: Meta = {
    title: 'Input',
    component: Input,
    argTypes: {
        value: {
            control: {
                type: 'text'
            }
        }
    },
    parameters: {
        controls: { expdanded: true }
    }
}

export default meta;

const Template: Story<InputProps> = (args) => React.createElement(() => {
    const [state, setState] = useState(args.value)
    const inputRef = useRef();

    return <Input
        innerRef={inputRef}
        value={state}
        label={args.label}
        onChange={({ target: { value } }) => setState(value)}
        placeholder={args.placeholder}
        disabled={args.disabled}
    />
})

export const DefaultInput = Template.bind({});
DefaultInput.args = { value: 'Yokohama Blues', placeholder: 'Insert text', disabled: false, label: 'song' }
