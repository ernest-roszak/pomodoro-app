import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { Clock } from 'components/Clock/Clock';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;
const Button = styled.button`
  font-size: 16px;
  margin-right: 10px;
`;

class TimeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startBtn: true,
    };
  }
  render() {
    return (
      <Container>
        <h1>I'm learning keyboard shortcut</h1>
        <Clock />
        <ProgressBar />
        <Button disabled={this.state.startBtn}> Start </Button>
        <Button> Stop </Button>
        <Button> Pauze </Button>
        Brakes: 2
      </Container>
    );
  }
}

export default TimeBox;
