import { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && time) {
      addTask({ name: taskName, time: parseInt(time), completed: false });
      setTaskName('');
      setTime('');
    }
  };

  return (
  <>
    <label className="block text-gray-300 text-3xl font-semibold mb-2">Task Manager</label>
    <form className="flex flex-col md:flex-row gap-4 mb-6" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Time (minutes)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="input"
      />
      <button type="submit" className="btn-primary">Add Task</button>
    </form>
    </>
  );
}

export default TaskInput;
