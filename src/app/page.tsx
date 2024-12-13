"use client";

import { useState } from "react";
import { usePokemonList } from "../hooks/usePokemonList";
import { useSort } from "../hooks/useSort";
import { useDelete } from "../hooks/useDelete";
import { useEdit } from "../hooks/useEdit";
import { useModal } from "../hooks/useModal";
import { Form } from "../components/common/Form";
import { Modal } from "../components/common/Modal";
import { Sort } from "../components/layout/Sort";
import { List } from "../components/layout/List";
import { Task } from "../types/TaskProps";

const Page: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const pokemonList = usePokemonList();
  const [setSortType, sortTasks] = useSort();
  const deleteTask = useDelete(setTasks);
  const {
    editTaskId,
    editedTask,
    handleEdit,
    handleChange,
    handleUpdate,
    handleCancel,
  } = useEdit({ tasks, setTasks });
  const { task, isOpen, openModal, closeModal } = useModal();

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
        editTaskId={editTaskId}
        editedTask={editedTask}
        handleEdit={handleEdit}
        handleChange={handleChange}
        handleUpdate={handleUpdate}
        handleCancel={handleCancel}
        openModal={openModal}
      />
      <Modal
        task={task}
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Page;
