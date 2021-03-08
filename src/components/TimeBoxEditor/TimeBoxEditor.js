import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: right;
  filter: ${({ isBlur }) => (isBlur ? 'blur(2px) grayscale(1)' : 'none')};
`;
const Input = styled.input`
  min-width: 60%;
  margin-left: 20px;
  font-size: 16px;
`;
const Button = styled.button`
  font-size: 16px;
  margin-left: 10px;
`;

export const TimeBoxEditor = ({ onTotalTimeInMinutesChange, onTitleChange, title, totalTimeInMinutes, isRunning, isEditable, onConfirm }) => {
  return (
    <Container isBlur={isEditable}>
      <div>
        <label>
          What are you doing? <Input disabled={isEditable} onChange={onTitleChange} value={title} type="text" />
        </label>
        <label>
          How long? <Input disabled={isEditable} onChange={onTotalTimeInMinutesChange} value={totalTimeInMinutes} type="number" />
        </label>
      </div>
      <Button disabled={isEditable} onClick={onConfirm}>
        Submit
      </Button>
    </Container>
  );
};
