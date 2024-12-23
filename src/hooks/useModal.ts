import { useState } from "react";
import { TaskType } from "../types/TaskType";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<TaskType | null>(null);

  const openModal = (task: TaskType) => {
    setTask(task);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTask(null);
  };

  return { task, isOpen, openModal, closeModal };
};
