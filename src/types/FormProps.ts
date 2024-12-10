import { Task } from "./TaskProps";

export type FormProps = {
  pokemonOptions: { value: string; label: string }[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
