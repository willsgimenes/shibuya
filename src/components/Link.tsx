import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type Inverted = false | true;

const StyledLink = styled.a.attrs(({ inverted }: { inverted: string }) => ({
  className: `flex items-center ${
    inverted ? 'text-white' : 'text-gray-600 hover:text-blue-700'
  }`,
}))<{ inverted: Inverted }>``;

export interface LinkProps {
  children: ReactNode;
  url: string;
  external: boolean;
  inverted?: boolean;
}

export const Link: FC<LinkProps> = ({
  inverted = false,
  url,
  external,
  children,
}) => (
  <StyledLink href={url} target={external ? '_blank' : ''} inverted={inverted}>
    {children}
    <svg
      className="w-5 h-5 ml-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </StyledLink>
);
