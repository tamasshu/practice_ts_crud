import { Task } from "./Task";

export type FormProps = {
  pokemonOptions: { value: string; label: string }[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
