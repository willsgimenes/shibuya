import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import '../main.css';

enum Variants {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

type ButtonVariants = 'primary' | 'secondary' | 'tertiary';

const getVariantStyle = (variant: string): string => {
  switch (variant) {
    case Variants.Primary:
      return 'bg-purple-800 hover:bg-purple-600';

    case Variants.Secondary:
      return 'bg-red-800 hover:bg-red-600';

    case Variants.Tertiary:
      return 'bg-gray-400';

    default:
      return 'bg-purple-800 hover:bg-purple-600';
  }
};

const BASE_STYLE = 'px-8 py-2 rounded-lg text-white';

const StyledButton = styled.button.attrs(
  ({ variant }: { variant: ButtonVariants }) => ({
    className: `${BASE_STYLE} ${getVariantStyle(variant)}`,
  })
)<{ variant: ButtonVariants }>``;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'primary',
  ...props
}) => (
  <StyledButton variant={variant} {...props}>
    {text}
  </StyledButton>
);
