import { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

function TaskManager() {
  const [taskList, setTaskList] = useState([]);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTaskList(storedTasks);
    }
  }, []);

  // Save task list to localStorage whenever it changes
  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
  }, [taskList]);

  const addTask = (task) => {
    const updatedTasks = [...taskList, task];
    setTaskList(updatedTasks);
  };

  const updateTaskStatus = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  return (
    <div className="App">
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={taskList}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskManager;
