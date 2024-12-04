import { useState } from "react";
import { Task } from "../types/Task";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return { tasks, setTasks };
};
