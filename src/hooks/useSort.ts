import { useState } from "react";
import { TaskType } from "../types/TaskType";

type UseSortReturnType = [
  (sortType: string) => void,
  (tasks: TaskType[]) => TaskType[]
];

export const useSort = (): UseSortReturnType => {
  const [sortType, setSortType] = useState<string>("");

  const sortTasks = (tasks: TaskType[]): TaskType[] => {
    if (!Array.isArray(tasks)) return [];

    return [...tasks].sort((a, b) => {
      switch (sortType) {
        case "priority-high": {
          const priorityOrder = { low: 3, medium: 2, high: 1 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        case "priority-low": {
          const priorityOrder = { low: 1, medium: 2, high: 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        case "deadline-early": {
          const dateA = new Date(a.deadline);
          const dateB = new Date(b.deadline);
          return dateB.getTime() - dateA.getTime();
        }
        case "deadline-late": {
          const dateA = new Date(a.deadline);
          const dateB = new Date(b.deadline);
          return dateA.getTime() - dateB.getTime();
        }
        default:
          return 0;
      }
    });
  };

  return [setSortType, sortTasks];
};
