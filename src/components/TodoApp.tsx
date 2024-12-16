"use client";

import { useState } from "react";
import { useDelete } from "../hooks/useDelete";
import { usePokemonList } from "../hooks/usePokemonList";
import { useEdit } from "../hooks/useEdit";
import { useSort } from "../hooks/useSort";
import { useModal } from "../hooks/useModal";
import { Form } from "../components/common/Form";
import { Modal } from "../components/common/Modal";
import { Sort } from "../components/layout/Sort";
import { List } from "../components/layout/List";
import { TaskType } from "../types/TaskType";

export const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const deleteTask = useDelete(setTasks);
  const pokemonList = usePokemonList();
  const [setSortType, sortTasks] = useSort();
  const { editTask, actions } = useEdit({ tasks, setTasks });
  const { task, openModal, closeModal } = useModal();

  const confirmDelete = () => {
    if (!task) return;

    deleteTask(task.id);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto p-16">
      <h1 className="text-heading font-bold mb-2">Pokemon Todo App</h1>
      <Form setTasks={setTasks} pokemonOptions={pokemonList} />
      <div className="w-full border-b border-white"></div>
      <Sort
        tasks={tasks}
        setTasks={setTasks}
        setSortType={setSortType}
        sortTasks={sortTasks}
      />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        actions={actions}
        openModal={openModal}
      />
      {task && (
        <Modal task={task} onClose={closeModal} onConfirm={confirmDelete} />
      )}
    </div>
  );
};
