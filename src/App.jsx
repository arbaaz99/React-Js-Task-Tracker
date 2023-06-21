import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // States
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Effects
  // Getting the data from server
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:9000/tasks");
      const data = await res.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  // Functions
  const addTask = async (task) => {
    const res = await fetch("http://localhost:9000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([data, ...tasks]);

    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    // setTasks([newTask, ...tasks]);
    // setTasks((prev) => [newTask, ...prev]);
  };

  // delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:9000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle tasks
  const toggleReminder = async (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    const updatedTask = {
      text: taskToUpdate.text,
      day: taskToUpdate.day,
      reminder: !taskToUpdate.reminder,
    };
    await fetch(`http://localhost:9000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className="container">
      {/* <h1>Hello from react</h1> */}
      {/* <h2> Hello {x ? "yes" : "no"}</h2> */}
      <Header
        propsTitle="Task  Tracker"
        propsOnToggleShowAdd={toggleShowAdd}
        propsShowAdd={showAdd}
      />
      {/* {showAdd ? <AddTask propsOnAdd={addTask} /> : <></>} */}
      {showAdd && <AddTask propsOnAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          propsTasks={tasks}
          propsOnDelete={deleteTask}
          propsOnToggle={toggleReminder}
        />
      ) : (
        "Nothing to show..!, Please create a new task"
      )}
    </div>
  );
}

export default App;
