import React, { useState } from "react";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(false);
  // console.log("done", done);

  // const tasks = ["Todo", "Counter"];
  console.log("tasks", tasks);
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const addTask = () => {
    setTasks((prev) => [...prev, { name: inputText, done: done }]);
    setInputText("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleDone = (index) => {
    const change = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(change);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{tasks.map((task) => task)} </p> */}
      </header>

      <div>
        <input
          value={inputText}
          type="text"
          placeholder="add something"
          onChange={handleChange}
        />
        <button type="submit" onClick={addTask}>
          Add tasks
        </button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.done !== true ? (
                <p onClick={() => deleteTask(index)}>{task.name}</p>
              ) : (
                <s onClick={() => deleteTask(index)}>{task.name}</s>
              )}
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleDone(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
