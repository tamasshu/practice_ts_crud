import { Task } from "./Task";

export type ListProps = {
  tasks: Task[];
  deleteTask: (id: number) => void;
};
