export type TaskProps = {
  tasks: [
    {
      id: number;
      title: string;
      assignedPokemon: string;
      assignedPokemonImage?: string;
      priority?: "low" | "medium" | "high";
      deadline?: string;
    }
  ];
  deleteTask: (id: number) => void;
};

export type Task = TaskProps["tasks"][number];
