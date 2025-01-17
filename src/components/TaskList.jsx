function TaskList({ tasks, updateTaskStatus, deleteTask, timeElapsed }) {
    return (
      <ul className="space-y-4">
        {tasks.map((task, index) => {
          const remainingTime = Math.max(0, task.time * 60 - timeElapsed);
  
          return (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gray-800 text-gray-300 shadow rounded-md"
            >
              <div>
                <h2 className="text-lg font-bold">{task.name}</h2>
                <p className={`text-sm ${remainingTime === 0 ? 'text-red-500' : 'text-gray-400'}`}>
                  Time Left: {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? '0' : ''}{remainingTime % 60}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 text-sm font-semibold bg-green-600 hover:bg-green-700 rounded ${
                    task.completed ? 'bg-green-700' : 'bg-gray-700'
                  }`}
                  onClick={() => updateTaskStatus(index)}
                >
                  {task.completed ? 'Completed' : 'Mark Complete'}
                </button>
                <button
                  className="px-4 py-2 text-sm font-semibold bg-red-600 hover:bg-red-700 rounded"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  
  export default TaskList;
  