import { useEffect, useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import RealTimeClock from '../components/RealTimeClock';
import { getFromStorage, saveToStorage } from '../utils/storage';

function Home() {
  const [tasks, setTasks] = useState(getFromStorage('tasks') || []);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    saveToStorage('tasks', tasks);
  }, [tasks]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTimeElapsed((prev) => prev + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, remainingTime: task.time }]);
  };

  const updateTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const secondsRotation = (timeElapsed % 60) * 6;
  const minutesRotation = Math.floor((timeElapsed / 60) % 60) * 6;
  const hoursRotation = Math.floor((timeElapsed / 3600) % 12) * 30;

  return (
    <div className="container mx-auto text-center min-h-screen bg-gray-900 text-gray-300 flex flex-col items-center justify-center">
      <header className="p-4">
      <RealTimeClock />

        <h1 className="text-4xl font-bold">Stopwatch Task Tracker</h1>
      </header>

      {/* Translucent Container */}
      <div className="p-8 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg mb-8">
        {/* Watch Animation */}
        <div className="relative w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
          {/* Hour Hand */}
          <div
            className="absolute w-1 bg-gray-300 h-8"
            style={{ transform: `rotate(${hoursRotation}deg)`, transformOrigin: "50% 50%" }}
          ></div>
          {/* Minute Hand */}
          <div
            className="absolute w-1 bg-gray-400 h-12"
            style={{ transform: `rotate(${minutesRotation}deg)`, transformOrigin: "50% 50%" }}
          ></div>
          {/* Second Hand */}
          <div
            className="absolute w-0.5 bg-red-500 h-14"
            style={{ transform: `rotate(${secondsRotation}deg)`, transformOrigin: "50% 50%" }}
          ></div>
          {/* Clock Center */}
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>

        <div className="text-2xl font-semibold mt-4">
          Time Elapsed: {Math.floor(timeElapsed / 60)}:{timeElapsed % 60 < 10 ? '0' : ''}{timeElapsed % 60}
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={() => setRunning(true)}>
            Start
          </button>
          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded" onClick={() => setRunning(false)}>
            Pause
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
            onClick={() => {
              setRunning(false);
              setTimeElapsed(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} timeElapsed={timeElapsed} />
    </div>
  );
}

export default Home;
