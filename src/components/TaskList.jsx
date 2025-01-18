import { useState } from "react";

function TaskList({ tasks, updateTaskStatus, deleteTask }) {
  return (
    <ul className="space-y-4 flex flex-col items-center px-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400">No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row justify-between items-center p-4 bg-white opacity-80 text-black shadow-lg rounded-lg w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mb-4"
          >
            <div className="w-full md:w-2/3 mb-4 md:mb-0">
              <h2 className="text-lg font-semibold">{task.name}</h2>
              <p className="text-sm">
                {task.time ? `Time: ${task.time} min` : "No time set"}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/3 justify-center md:justify-end">
              <button
                className={`px-4 py-2 rounded-lg font-semibold w-full md:w-auto ${
                  task.completed
                    ? "bg-green-700 hover:bg-green-600"
                    : "bg-green-600 hover:bg-green-500"
                } transition-all duration-300 mb-2 md:mb-0`}
                onClick={() => updateTaskStatus(index)}
              >
                {task.completed ? "Completed" : "Mark Complete"}
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition-all duration-300 font-semibold w-full md:w-auto"
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
