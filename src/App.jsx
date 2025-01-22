import {  useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { addTaskDb, deleteTaskDb, getTasksDb, toggleTaskReminderDb } from "./db";

function App() {
  // States
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState(getTasksDb());

  // Functions
  const addTask = async (task) => {
    
    const data = addTaskDb(task)
    setTasks(data);
  };

  // delete Tasks
  const deleteTask = async (id) => {
    const data = deleteTaskDb(id)
    
    setTasks(data);
  };

  //Toggle tasks
  const toggleReminder = async (id) => {
    const data = toggleTaskReminderDb(id)
    setTasks(data);
  };

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className="container">
      {/* <h1>Hello from react</h1> */}
      {/* <h2> Hello {x ? "yes" : "no"}</h2> */}
      <Header
        propsTitle="Task Tracker"
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
