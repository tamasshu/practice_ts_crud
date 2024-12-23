import Image from "next/image";
import { TaskType } from "../../types/TaskType";
import { priorityMap } from "../../constants/priorityMap";
import { priorityOptions } from "../../constants/priorityOptions";
import { Input, Select, Button } from "../common/UIComponents";

type EditPropsType = {
  tasks: TaskType[];
  deleteTask: (id: TaskType["id"]) => void;
  editTask: {
    id: TaskType["id"] | null;
    data: Partial<TaskType>;
  };
  actions: {
    handleEdit: (task: TaskType) => void;
    handleChange: (field: string, value: string) => void;
    handleUpdate: () => void;
    handleCancel: () => void;
  };
  openModal: (task: TaskType) => void;
};

export const List: React.FC<EditPropsType> = ({
  tasks,
  editTask,
  actions,
  openModal,
}) => {
  return (
    <ul className="grid grid-cols-2 gap-2 w-full">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex flex-col justify-between items-center p-4 bg-white rounded shadow-md"
        >
          <div className="mb-2">
            <p className="text-center mb-2">{task.assignedPokemon}</p>
            {task.assignedPokemonImage && (
              <Image
                src={task.assignedPokemonImage}
                alt={task.assignedPokemon}
                width={80}
                height={80}
                className="w-40 h-40"
              />
            )}
          </div>
          <h3 className="text-lg font-bold mb-3">{task.title}</h3>
          {editTask.id === task.id ? (
            <>
              <div className="flex flex-col gap-2">
                <Select
                  options={priorityOptions}
                  name="priority"
                  value={editTask.data.priority}
                  onChange={(e) =>
                    actions.handleChange("priority", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded"
                />
                <Input
                  name="deadline"
                  type="date"
                  value={editTask.data.deadline}
                  onChange={(e) =>
                    actions.handleChange("deadline", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded"
                />
                <Button
                  onClick={actions.handleUpdate}
                  type="button"
                  variant="edit"
                >
                  更新
                </Button>
                <Button
                  onClick={actions.handleCancel}
                  type="button"
                  variant="cancel"
                >
                  キャンセル
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <p>優先度：{priorityMap[task.priority]}</p>
                <p>締切日：{task.deadline}</p>
              </div>

              <div className="flex flex-col w-full gap-2">
                <Button
                  onClick={() => actions.handleEdit(task)}
                  type="button"
                  variant="edit"
                >
                  編集
                </Button>
                <Button
                  onClick={() => openModal(task)}
                  type="button"
                  variant="delete"
                >
                  削除
                </Button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
