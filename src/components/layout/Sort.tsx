import { Task } from "../../types/TaskProps";
import { Select } from "../common/Select";

type SortProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setSortType: (sortType: string) => void;
  sortTasks: (tasks: Task[]) => Task[];
};

export const Sort: React.FC<SortProps> = ({
  tasks,
  setTasks,
  setSortType,
  sortTasks,
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortType = e.target.value;
    setSortType(sortType);
    const sortedTasks = sortTasks(tasks);
    setTasks(sortedTasks);
  };

  return (
    <div className="flex justify-end mr-0 ml-auto">
      <Select
        options={[
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
