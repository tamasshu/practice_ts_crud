import { SetTasksType } from "../types/SetTasksType";
import { TaskType } from "../types/TaskType";

export const useDelete = (setTasks: SetTasksType) => {
  const deleteTask = (id: TaskType["id"]) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return deleteTask;
};
