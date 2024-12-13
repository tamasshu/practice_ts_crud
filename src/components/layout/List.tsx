import Image from "next/image";
import { Task } from "../../types/TaskProps";
import { Button } from "../common/Button";
import { priorityMap } from "../../types/JapanesePriority";
import { Input } from "../common/Input";
import { Select } from "../common/Select";

type EditProps = {
  tasks: Task[];
  editTaskId: number | null;
  editedTask: Partial<Task>;
  handleEdit: (task: Task) => void;
  handleChange: (field: keyof Task, value: any) => void;
  handleUpdate: () => void;
  handleCancel: () => void;
  openModal: (task: Task) => void;
};

export const List: React.FC<EditProps> = ({
  tasks,
  editTaskId,
  editedTask,
  handleEdit,
  handleChange,
  handleUpdate,
  handleCancel,
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
          {editTaskId === task.id ? (
            <>
              <div className="flex flex-col gap-2">
                <Select
                  options={[
                    { value: "low", label: "低" },
                    { value: "medium", label: "中" },
                    { value: "high", label: "高" },
                  ]}
                  name="priority"
                  value={editedTask.priority}
                  onChange={(e) => handleChange("priority", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
                <Input
                  name="deadline"
                  type="date"
                  value={editedTask.deadline}
                  onChange={(e) => handleChange("deadline", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
                <Button onClick={handleUpdate} variant="edit">
                  更新
                </Button>
                <Button onClick={handleCancel} variant="cancel">
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
                <Button onClick={() => handleEdit(task)} variant="edit">
                  編集
                </Button>
                <Button onClick={() => openModal(task)} variant="delete">
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
