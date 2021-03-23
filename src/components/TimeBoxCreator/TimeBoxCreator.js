import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import uuid4 from 'uuid.v4';

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: right;
  filter: ${({ isBlur }) => (isBlur ? 'blur(2px) grayscale(1)' : 'none')};
  background-color: ${({ theme }) => theme.colors.nephaeritis};
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

export const TimeBoxCreator = ({ onCreate }) => {
  const [newTimebox, setNewTimebox] = useState({
    title: '',
    totalTimeInMinutes: '',
  });

  //Use Ref method
  //   const titleInput = useRef('');
  //   const timeInput = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      id: uuid4(),
      title: newTimebox.title,
      totalTimeInMinutes: newTimebox.totalTimeInMinutes,
    });
    setNewTimebox({
      title: '',
      totalTimeInMinutes: '',
    });
  };
  const handleFormValueChange = (e) => {
    setNewTimebox(() => ({
      ...newTimebox,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container as="form" onSubmit={handleSubmit}>
      <div>
        <label>
          What are you doing? <Input onChange={handleFormValueChange} name="title" value={newTimebox.title} type="text" />
        </label>
        <label>
          How long? <Input onChange={handleFormValueChange} name="totalTimeInMinutes" value={newTimebox.totalTimeInMinutes} type="number" />
        </label>
      </div>
      <Button type="submit">Add timebox</Button>
    </Container>
  );
};
