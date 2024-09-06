import React from "react";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(false);
  // console.log("done", done);
  console.log(tasks);

  // const tasks = ["Todo", "Counter"];
  // console.log("tasks", tasks);
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const addTask = () => {
    setTasks((prev) => [...prev, { name: inputText, done: done }]);
    setInputText("");
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((taskClicked) => taskClicked !== task));
  };

  // const deleteTask = (index) => {
  //   setTasks(tasks.filter((_, i) => i !== index)); // Usuwamy element po indeksie
  // };

  const handleDone = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
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
                <p onClick={() => deleteTask(task.name)}>{task.name}</p>
              ) : (
                <s onClick={() => deleteTask(task.name)}>{task.name}</s>
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
