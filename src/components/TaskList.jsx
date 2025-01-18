import { useState } from "react";

function TaskList({ tasks, updateTaskStatus, deleteTask }) {
  return (
    <ul className="space-y-4 flex flex-col items-center">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400">No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 bg-white opacity-80 text-black shadow-lg rounded-lg w-3xl md:w-1/2 xl:w-1/3"
          >
            <div className="w-2/3">
              <h2 className="text-lg font-semibold">{task.name}</h2>
              <p className="text-sm">
                {task.time ? `Time: ${task.time} min` : "No time set"}
              </p>
            </div>
            <div className="flex gap-4 w-1/3 justify-end">
              <button
                className={`px-4 py-2 rounded-lg font-semibold ${
                  task.completed
                    ? "bg-green-700 hover:bg-green-600"
                    : "bg-green-600 hover:bg-green-500"
                } transition-all duration-300`}
                onClick={() => updateTaskStatus(index)}
              >
                {task.completed ? "Completed" : "Mark Complete"}
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition-all duration-300 font-semibold"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;
