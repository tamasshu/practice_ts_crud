import { useState } from "react";
import { TaskType } from "../types/TaskType";
import { SetTasksType } from "../types/SetTasksType";

type EditPropsType = {
  tasks: TaskType[];
  setTasks: SetTasksType;
};

export const useEdit = ({ tasks, setTasks }: EditPropsType) => {
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
