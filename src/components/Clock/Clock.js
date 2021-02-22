import React from 'react';
import styled from 'styled-components';

export const ClockHeader = styled.h2`
  color: ${({ theme }) => theme.colors.orangered};
`;

export const Clock = ({ minutes = 20, seconds = 18 }) => (
  <ClockHeader>
    Left {minutes}:{seconds}
  </ClockHeader>
);
