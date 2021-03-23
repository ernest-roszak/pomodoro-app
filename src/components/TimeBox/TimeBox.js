import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { Clock } from 'components/Clock/Clock';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  filter: ${({ isBlur }) => (isBlur ? 'blur(2px) grayscale(1)' : 'none')};
  background-color: ${({ theme }) => theme.colors.sunFlower};
`;
const Button = styled.button`
  font-size: 16px;
  margin-right: 10px;
`;

const TimeBox = ({
  totalTimeInMinutes,
  title,
  handleStart,
  startTimer,
  isRunning,
  increment,
  setElapsedTimeSeconds,
  elapsedTimeSeconds,
  setRunning,
  onConfirm,
  isEditable,
}) => {
  const [isPause, setPause] = useState(false);
  const [pauseCounter, setPauseCounter] = useState(0);

  const totalTimeInSeconds = totalTimeInMinutes * 60;
  const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeSeconds;
  const minutesLeft = Math.floor(timeLeftInSeconds / 60);
  const secondsLeft = Math.floor(timeLeftInSeconds % 60);
  const progressBarInPercent = (elapsedTimeSeconds / totalTimeInSeconds) * 100.0;

  const handleStop = () => {
    setRunning(false);
    setPause(false);
    setPauseCounter(0);
    setElapsedTimeSeconds(0);
    stopTimer();
  };

  const stopTimer = () => {
    clearInterval(increment.current);
  };
  const togglePause = () => {
    setPause(!isPause);
    setPauseCounter(isPause ? pauseCounter : pauseCounter + 1);
    isPause ? startTimer() : stopTimer();
  };

  return (
    <Container isBlur={!isEditable}>
      <h1>{title}</h1>
      <Clock isPause={isPause} seconds={secondsLeft} minutes={minutesLeft} />
      <ProgressBar isPause={isPause} percent={progressBarInPercent} />
      <Button disabled={!isEditable} onClick={onConfirm}>
        Edit
      </Button>
      <Button disabled={isRunning} onClick={handleStart}>
        Start
      </Button>
      <Button disabled={!isRunning} onClick={handleStop}>
        Stop
      </Button>
      <Button disabled={!isRunning} onClick={togglePause}>
        {isPause ? 'Resume' : 'Pause'}
      </Button>
      Brakes: {pauseCounter}
    </Container>
  );
};

export default TimeBox;
