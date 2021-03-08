import React, { useRef, useState } from 'react';
import CurrentTimeBoxTimeBox from 'components/TimeBox/TimeBox';
import { TimeBoxEditor } from 'components/TimeBoxEditor/TimeBoxEditor';

const EditableTimeBox = () => {
  const [title, setTitle] = useState("I'm learning...");
  const [totalTimeInMinutes, setTotalTimeInMinutes] = useState(15);
  const [isRunning, setRunning] = useState(false);
  const increment = useRef(null);
  const [elapsedTimeSeconds, setElapsedTimeSeconds] = useState(0);
  const [isEditable, setIsEditable] = useState(false);

  const handleStart = () => {
    setRunning(!isRunning);
    startTimer();
  };
  const startTimer = () => {
    increment.current = window.setInterval(() => {
      setElapsedTimeSeconds((elapsedTimeSeconds) => elapsedTimeSeconds + 0.01);
    }, 10);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTimeInMinutesChange = (e) => {
    setTotalTimeInMinutes(e.target.value);
  };
  const handleConfirm = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
      <TimeBoxEditor
        onTotalTimeInMinutesChange={handleTimeInMinutesChange}
        onTitleChange={handleTitleChange}
        onHandleStart={handleStart}
        onConfirm={handleConfirm}
        totalTimeInMinutes={totalTimeInMinutes}
        title={title}
        setRunning={setRunning}
        isRunning={isRunning}
        isEditable={isEditable}
      />
      <CurrentTimeBoxTimeBox
        totalTimeInMinutes={totalTimeInMinutes}
        title={title}
        startTimer={startTimer}
        handleStart={handleStart}
        onConfirm={handleConfirm}
        elapsedTimeSeconds={elapsedTimeSeconds}
        isRunning={isRunning}
        isEditable={isEditable}
        setRunning={setRunning}
        increment={increment}
        setElapsedTimeSeconds={setElapsedTimeSeconds}
      />
    </>
  );
};

export default EditableTimeBox;
