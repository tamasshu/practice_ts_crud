import { Task } from "../types/Task";

export const useDelete = (
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return deleteTask;
};
