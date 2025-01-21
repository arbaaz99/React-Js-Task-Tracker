const localHostKey = "task-tracker-storage";

export function getTasksDb() {
  const localString = localStorage.getItem(localHostKey);

  if (localString === null) {
    localStorage.setItem(localHostKey, JSON.stringify([]));
    return [];
  }

  return JSON.parse(localString);
}

export function addTaskDb(task) {
  console.log(task);

  const tasks = getTasksDb();
  const newTasks = [
    ...tasks,
    {
      text: task.text,
      day: task.day,
      reminder: task.reminder,
      id: Math.random(),
    },
  ];

  localStorage.setItem(localHostKey, JSON.stringify(newTasks));

  return getTasksDb();
}

export function deleteTaskDb(id) {
  const tasks = getTasksDb();
  const newTasks = tasks.filter((t) => t.id !== id);

  localStorage.setItem(localHostKey, JSON.stringify(newTasks));

  return getTasksDb();
}

export function toggleTaskReminderDb(id) {
  const tasks = getTasksDb();
  const newTasks = tasks.map((task) =>
    task.id === id ? { ...task, reminder: !task.reminder } : task
  );

  localStorage.setItem(localHostKey, JSON.stringify(newTasks));
  return getTasksDb();
}
