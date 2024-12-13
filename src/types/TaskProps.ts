export type TaskProps = {
  tasks: [
    {
      id: number;
      title: string;
      assignedPokemon: string;
      assignedPokemonImage?: string;
      priority: "low" | "medium" | "high";
      deadline: string;
    }
  ];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setSortType: (sortType: string) => void;
  openModal: (task: Task) => void;
  handleEdit: (task: Task) => void;
  deleteTask: (id: number) => void;
};

export type Task = TaskProps["tasks"][number];
