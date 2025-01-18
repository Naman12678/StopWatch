import { useState } from "react";

function TaskInput({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTask({
        name: taskName,
        time: time ? parseInt(time) : 0,
        completed: false,
      });
      setTaskName("");
      setTime("");
    }
  };

  return (
    <div className="w-full px-4 py-2">
      <label className="block text-black text-2xl font-semibold mb-4 text-center hover:text-white">
        Task Manager
      </label>
      <form className="flex flex-col md:flex-row gap-4 justify-center items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="p-2 w-full md:w-1/3 rounded-lg border-2 border-blue-500 focus:outline-none focus:border-blue-700 text-black"
          required
        />
        <input
          type="number"
          placeholder="Time (minutes) (Optional)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 w-full md:w-1/5 rounded-lg border-2 border-blue-500 focus:outline-none focus:border-blue-900 text-black"
        />
        <button
          type="submit"
          className="p-2 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-900 transition duration-300 shadow-md"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
