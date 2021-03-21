import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  innerRef: any;
  disabled?: boolean;
  label: string;
}

const StyledInput = styled.input.attrs(
  ({ disabled }: { disabled: boolean }) => ({
    className: `p-2 border rounded-lg placeholder-yellow-800 ${disabled &&
      'border-gray-100 text-gray-400'} `,
  })
)``;

export const Input: FC<InputProps> = ({
  value,
  onChange,
  innerRef,
  disabled = false,
  label,
  ...props
}) => {
  return (
    <fieldset>
      <label htmlFor={label}>{label}</label>
      <StyledInput
        id={label}
        value={value}
        type="text"
        onChange={onChange}
        ref={innerRef}
        disabled={disabled}
        {...props}
      />
    </fieldset>
  );
};
