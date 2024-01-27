import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { LuMoveUp, LuMoveDown } from "react-icons/lu";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const saveTasksToLocalStorage = (updatedTasks) => {
    // Save tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const enterButtonFunctionality = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  }

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    if (newTask !== "") {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask("");

      // Save tasks to localStorage whenever a new task is added
      saveTasksToLocalStorage(updatedTasks);
    }
  }

  const deleteTask = (i) => {
    const updatedTasks = tasks.filter((_, j) => j !== i);
    setTasks(updatedTasks);

    // Save tasks to localStorage whenever a task is deleted
    saveTasksToLocalStorage(updatedTasks);
  }

  const moveTaskUp = (i) => {
    if (i > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i - 1]] = [updatedTasks[i - 1], updatedTasks[i]];
      setTasks(updatedTasks);

      // Save tasks to localStorage whenever a task is moved
      saveTasksToLocalStorage(updatedTasks);
    }
  }

  const moveTaskDown = (i) => {
    if (i < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i + 1]] = [updatedTasks[i + 1], updatedTasks[i]];
      setTasks(updatedTasks);

      // Save tasks to localStorage whenever a task is moved
      saveTasksToLocalStorage(updatedTasks);
    }
  }

  return (
    <div className="flex justify-center items-center flex-col gap-4 text-xl">
      <h1 className="text-red-500 text-3xl">TodoList</h1>
      <div className="flex gap-2">
        <input
          onKeyPress={enterButtonFunctionality}
          className="p-2 outline-none border-2 rounded-md"
          value={newTask}
          placeholder="Enter new Task"
          onChange={handleInputChange}
          type="text"
        />
        <button
          onClick={addTask}
          className="bg-black text-white p-2  rounded-lg "
        >
          Add Task
        </button>
      </div>
      <div className="">
        <ol>
          {tasks.map((task, i) => (
            <li className="flex items-center mt-4" key={i}>
              <span>{task}</span>
              <button
                onClick={() => {
                  deleteTask(i);
                }}
              >
                <MdDelete />
              </button>
              <button
                onClick={() => {
                  moveTaskUp(i);
                }}
              >
                <LuMoveUp />
              </button>
              <button
                onClick={() => {
                  moveTaskDown(i);
                }}
              >
                <LuMoveDown />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
