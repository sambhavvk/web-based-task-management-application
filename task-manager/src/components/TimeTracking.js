import React, { useState } from 'react';

function TimeTracking(props) {
  const [time, setTime] = useState(0);

  function startTimer() {
    setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
  }

  return (
    <div>
      <h3>Time Tracking</h3>
      <p>Total Time: {time} seconds</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default TimeTracking;
