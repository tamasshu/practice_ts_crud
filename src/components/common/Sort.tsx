import { useState, useEffect, useCallback } from "react";
import { TaskType } from "../../types/TaskType";
import { TaskListType } from "../../types/TaskListType";
import { Select } from "./UIComponents";

const priorityOrder: { [key in TaskType["priority"]]: number } = {
  low: 1,
  medium: 2,
  high: 3,
};

const deadlineOrder = (a: TaskType, b: TaskType) => {
  const dateA = new Date(a.deadline).getTime();
  const dateB = new Date(b.deadline).getTime();
  return dateA - dateB;
};

export const Sort: React.FC<TaskListType> = ({ tasks, setTasks }) => {
  const [sortType, setSortType] = useState<string>("");

  const sortTasks = useCallback(
    (tasks: TaskType[]): TaskType[] => {
      return [...tasks].sort((a, b) => {
        switch (sortType) {
          case "priority-high":
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          case "priority-low":
            return priorityOrder[b.priority] - priorityOrder[a.priority];
          case "deadline-early":
            return deadlineOrder(a, b);
          case "deadline-late":
            return deadlineOrder(b, a);
          default:
            return 0;
        }
      });
    },
    [sortType]
  );

  useEffect(() => {
    if (sortType) {
      const sortedTasks = sortTasks(tasks);
      setTasks(sortedTasks);
    }
  }, [sortType]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  return (
    <div className="flex justify-end mr-0 ml-auto">
      <Select
        options={[
          { value: "", label: "並び替え" },
          { value: "priority-low", label: "優先度：高い順" },
          { value: "priority-high", label: "優先度：低い順" },
          { value: "deadline-early", label: "締切日：早い順" },
          { value: "deadline-late", label: "締切日：遅い順" },
        ]}
        name="sort"
        onChange={handleSortChange}
        className="w-40 px-3 py-2 border rounded"
      />
    </div>
  );
};
