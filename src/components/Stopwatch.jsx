import { useState, useEffect } from "react";

function Stopwatch() {
  // Initialize state from localStorage or default to 0
  const [timeElapsed, setTimeElapsed] = useState(() => {
    const savedTime = localStorage.getItem("timeElapsed");
    return savedTime ? parseInt(savedTime, 10) : 0;
  });
  
  const [running, setRunning] = useState(() => {
    const savedRunning = localStorage.getItem("running");
    return savedRunning ? JSON.parse(savedRunning) : false;
  });

  useEffect(() => {
    let interval;

    // If stopwatch is running, start the interval
    if (running) {
      interval = setInterval(() => {
        setTimeElapsed((prevTime) => {
          const newTime = prevTime + 1;
          localStorage.setItem("timeElapsed", newTime); // Save the new time in localStorage
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(interval); // If not running, clear the interval
    }

    // Cleanup on component unmount or when the running state changes
    return () => clearInterval(interval);
  }, [running]); // Only run the effect when the "running" state changes

  useEffect(() => {
    // Save the "running" state to localStorage whenever it changes
    localStorage.setItem("running", running);
  }, [running]);

  // Calculate seconds rotation (6 degrees per second)
  const secondsRotation = (timeElapsed % 60) * 6;

  return (
    <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-white rounded-lg shadow-md w-96 h-96 flex flex-col items-center justify-center">
      {/* Watch Animation */}
      <div className="relative w-60 h-60 bg-gray-700 rounded-full flex items-center justify-center shadow-lg mb-6">
        {/* Seconds Hand */}
        <div
          className="absolute w-0.5 bg-red-500 h-14"
          style={{
            transform: `rotate(${secondsRotation}deg)`,
            transformOrigin: "bottom center",
          }}
        ></div>
        {/* Clock Numbers */}
        {[...Array(12)].map((_, index) => (
          <span
            key={index}
            className="absolute text-white text-sm"
            style={{
              transform: `rotate(${index * 30}deg) translate(0, -100px) rotate(-${
                index * 30
              }deg)`,
            }}
          >
            {index === 0 ? 12 : index}
          </span>
        ))}
      </div>

      {/* Time Elapsed */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Time Elapsed:{" "}
        {`${Math.floor(timeElapsed / 60)
          .toString()
          .padStart(2, "0")}:${(timeElapsed % 60).toString().padStart(2, "0")}`}
      </h2>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow"
          onClick={() => setRunning(true)}
        >
          Start
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded shadow"
          onClick={() => setRunning(false)}
        >
          Pause
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow"
          onClick={() => {
            setRunning(false);
            setTimeElapsed(0);
            localStorage.setItem("timeElapsed", 0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
