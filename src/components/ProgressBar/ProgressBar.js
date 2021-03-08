import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #ec5822;
  border-radius: 5px;
  height: 25px;
  margin-bottom: 20px;
  padding: 5px;
  filter: ${({ isBlur }) => (isBlur ? 'blur(2px) grayscale(1)' : 'none')};
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.orangered};
`;

export const ProgressBar = ({ isPause, percent }) => {
  return (
    <Container isBlur={isPause}>
      <Bar style={{ width: `${percent}%` }}></Bar>
    </Container>
  );
};
