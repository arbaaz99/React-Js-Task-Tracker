import { FaTimes } from "react-icons/fa";

const Task = ({ propsTask, propsOnDelete2, propsOnToggle }) => {
  return (
    <div
      className={`task ${propsTask.reminder ? "reminder" : ""}`}
      onDoubleClick={() => propsOnToggle(propsTask.id)}
    >
      <h3>
        {propsTask.text}{" "}
        <FaTimes style={styling} onClick={() => propsOnDelete2(propsTask.id)} />
      </h3>
      <p>{propsTask.day}</p>
    </div>
  );
};

const styling = {
  color: "red",
  cursor: "grab",
};

export default Task;
