import React from 'react';
import styled from 'styled-components';

export const ClockHeader = styled.h2`
  color: ${({ theme }) => theme.colors.orangered};
  filter: ${({ isBlur }) => (isBlur ? 'blur(2px) grayscale(1)' : 'none')};
`;

export const Clock = ({ isPause, minutes, seconds }) => (
  <ClockHeader isBlur={isPause}>
    Left {minutes}:{seconds}
  </ClockHeader>
);
