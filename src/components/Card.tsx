import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div.attrs(() => ({
  className: 'bg-white rounded-md shadow',
}))``;

export interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children, ...props }) => (
  <StyledCard {...props}>{children}</StyledCard>
);
