import Image from "next/image";
import { TaskType } from "../../types/TaskType";
import { Button } from "../common/UIComponents";

type ListPropsType = {
  tasks: TaskType[];
  deleteTask: (id: TaskType["id"]) => void;
};

export const List: React.FC<ListPropsType> = ({ tasks, deleteTask }) => {
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
          <h3 className="text-lg font-bold mb-2">{task.title}</h3>
          <Button
            onClick={() => deleteTask(task.id)}
            type="button"
            variant="delete"
          >
            削除
          </Button>
        </li>
      ))}
    </ul>
  );
};
