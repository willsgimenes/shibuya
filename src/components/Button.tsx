import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import '../main.css';

enum Variants {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Inverted = 'inverted',
}

type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'inverted';

const getVariantStyle = (variant: string): string => {
  switch (variant) {
    case Variants.Primary:
      return 'bg-purple-800 hover:bg-purple-600 text-white';

    case Variants.Secondary:
      return 'bg-red-800 hover:bg-red-600 text-white';

    case Variants.Tertiary:
      return 'bg-gray-400 text-white';

    case Variants.Inverted:
      return 'bg-white text-black';

    default:
      return 'bg-purple-800 hover:bg-purple-600 text-white';
  }
};

const BASE_STYLE = 'px-8 py-2 rounded-lg';

const DISABLED_STYLED = 'bg-gray-100 text-gray-500';

const StyledButton = styled.button.attrs(
  ({ variant, disabled }: { variant: ButtonVariants; disabled: boolean }) => ({
    className: `${BASE_STYLE} ${
      disabled ? DISABLED_STYLED : getVariantStyle(variant)
    }`,
  })
)<{ variant: ButtonVariants }>``;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'primary',
  disabled = false,
  ...props
}) => (
  <StyledButton variant={variant} {...props} disabled={disabled}>
    {text}
  </StyledButton>
);
