import React, { FC, ReactNode } from 'react';

enum Variants {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  P = 'p',
  SMALL = 'small',
}

type TextVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small';

const getVariantStyle = (variant: string): string => {
  switch (variant) {
    case Variants.H1:
      return 'text-4xl';

    case Variants.H2:
      return 'text-3xl';

    case Variants.H3:
      return 'text-2xl';

    case Variants.H4:
      return 'text-xl';

    case Variants.H5:
      return 'text-l';

    case Variants.SMALL:
      return 'text-sm';

    case Variants.P:
      return 'text-base';

    default:
      return 'text-base';
  }
};

export interface TextProps {
  variant?: TextVariants;
}

const renderElement = ({
  variant,
  children,
}: {
  variant: string;
  children: ReactNode;
}) => {
  return React.createElement(
    variant,
    { className: getVariantStyle(variant) },
    children
  );
};

export const Text: FC<TextProps> = ({ children, variant = 'p' }) =>
  renderElement({ variant, children });
