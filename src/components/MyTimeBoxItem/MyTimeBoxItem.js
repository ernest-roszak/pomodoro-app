import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  font-size: 16px;
  margin-right: 10px;
`;

export const MyTimeBoxItem = ({ title, totalTimeInMinutes, onDelete, onEdit }) => {
  return (
    <Container>
      <h3>
        {title} - {totalTimeInMinutes}
      </h3>
      <Button onClick={onDelete}>Delete</Button>
      <Button onClick={onEdit}>Edit</Button>
    </Container>
  );
};
