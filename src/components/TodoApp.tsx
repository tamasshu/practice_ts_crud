"use client";

import { useState } from "react";
import { useDelete } from "../hooks/useDelete";
import { usePokemonList } from "../hooks/usePokemonList";
import { Form } from "./common/Form";
import { List } from "./layout/List";
import { TaskType } from "../types/TaskType";

export const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const deleteTask = useDelete(setTasks);
  const pokemonList = usePokemonList();

  return (
    <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto p-16">
      <h1 className="text-heading font-bold mb-2">Pokemon Todo App</h1>
      <Form setTasks={setTasks} pokemonOptions={pokemonList} />
      <div className="w-full border-b border-white"></div>
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};
