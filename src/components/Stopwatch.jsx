import { useState, useEffect } from 'react';

function Stopwatch({ tasks }) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && running) {
      setRunning(false);
      alert('Time is up!');
    }
  }, [running, timeLeft]);

  const startTimer = () => setRunning(true);
  const stopTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setTimeLeft(0);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl">Time Left: {timeLeft} seconds</h2>
      <div className="flex gap-2 mt-2">
        <button className="btn-primary" onClick={startTimer}>Start</button>
        <button className="btn-secondary" onClick={stopTimer}>Pause</button>
        <button className="btn-danger" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
