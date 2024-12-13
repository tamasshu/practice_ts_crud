import { useState } from "react";
import { Task } from "../types/TaskProps";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Task | null>(null);

  const openModal = (task: Task) => {
    setTask(task);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTask(null);
  };

  return { isOpen, task, openModal, closeModal };
};
