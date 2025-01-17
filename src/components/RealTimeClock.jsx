import { useState, useEffect } from 'react';

function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="text-gray-300 text-2xl font-bold bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      Time: {formatTime(currentTime)}
    </div>
  );
}

export default RealTimeClock;
