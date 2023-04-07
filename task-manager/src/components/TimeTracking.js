import React, { useState, useEffect } from 'react';

const TimeTracking = ({ taskId }) => {
  const [isTracking, setIsTracking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const startTracking = () => {
    if (!isTracking) {
      setIsTracking(true);
      const newIntervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const stopTracking = () => {
    if (isTracking) {
      setIsTracking(false);
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  };

  return (
    <div>
      <h3>Task ID: {taskId}</h3>
      <h4>Time Spent: {elapsedTime} seconds</h4>
      <button onClick={startTracking} disabled={isTracking}>
        Start
      </button>
      <button onClick={stopTracking} disabled={!isTracking}>
        Stop
      </button>
    </div>
  );
};

export default TimeTracking;
