import { useState } from "react";

const AddTask = ({ propsOnAdd }) => {
  // States
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  // Functions
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add text!");
      return;
    }

    propsOnAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add day & time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input type="submit" value="Save task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
