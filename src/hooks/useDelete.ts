import { Task } from "../types/TaskProps";

export const useDelete = (
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return deleteTask;
};
