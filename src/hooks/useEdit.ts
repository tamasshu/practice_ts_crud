import { useState } from "react";
import { TaskType } from "../types/TaskType";
import { TaskListType } from "../types/TaskListType";

export const useEdit = ({ tasks, setTasks }: TaskListType) => {
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<Partial<TaskType>>({});

  const handleEdit = (task: TaskType) => {
    setEditTaskId(task.id);
    setEditedTask({ ...task });
  };

  const handleChange = (field: string, value: string) => {
    setEditedTask((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editTaskId ? { ...task, ...editedTask } : task
    );
    setTasks(updatedTasks);

    setEditTaskId(null);
    setEditedTask({});
  };

  const handleCancel = () => {
    setEditTaskId(null);
    setEditedTask({});
  };

  return {
    editTask: {
      id: editTaskId,
      data: editedTask,
    },
    actions: {
      handleEdit,
      handleChange,
      handleUpdate,
      handleCancel,
    },
  };
};
