import { MyTimeBoxItem } from 'components/MyTimeBoxItem/MyTimeBoxItem';
import { TimeBoxCreator } from 'components/TimeBoxCreator/TimeBoxCreator';
import React, { useState } from 'react';

const TimeBoxList = () => {
  const [timeboxes, setTimeboxes] = useState([
    { title: "I'm learning list", totalTimeInMinutes: 25 },
    { title: "I'm learning forms", totalTimeInMinutes: 15 },
    { title: "I'm learning styles", totalTimeInMinutes: 5 },
  ]);

  const addMyTimebox = (newTimebox) => {
    setTimeboxes([newTimebox, ...timeboxes]);
  };
  const handleCreate = (createdTimebox) => {
    // addMyTimebox({ title: "I'm good", totalTimeInMinutes: 11 });
    addMyTimebox(createdTimebox);
  };
  const removeMyTimebox = (removedIndex) => {
    setTimeboxes(timeboxes.filter((timeboxes, index) => index !== removedIndex));
  };
  const updateMyTimebox = (indexToUpdate, updatedTimebox) => {
    setTimeboxes(timeboxes.map((myTimebox, index) => (index === indexToUpdate ? updatedTimebox : myTimebox)));
  };
  return (
    <>
      <TimeBoxCreator onCreate={handleCreate} />
      {timeboxes.map((el, index) => (
        <MyTimeBoxItem
          key={index}
          title={el.title}
          totalTimeInMinutes={el.totalTimeInMinutes}
          onDelete={() => removeMyTimebox(index)}
          onEdit={() => updateMyTimebox(index, { title: 'xxx', totalTimeInMinutes: 12 })}
        />
      ))}
    </>
  );
};

export default TimeBoxList;
