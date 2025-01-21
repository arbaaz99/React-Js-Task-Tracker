import Task from "./Task";

const Tasks = ({ propsTasks, propsOnDelete, propsOnToggle }) => {
  return (
    <>
      {propsTasks.map((task) => (
        <Task
          key={task.id}
          propsTask={task}
          propsOnDelete2={propsOnDelete}
          propsOnToggle={propsOnToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
