import Image from "next/image";
import { TaskProps } from "../../types/TaskProps";
import { Button } from "../common/Button";

export const List: React.FC<TaskProps> = ({ tasks, deleteTask }) => {
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
          <div className="mb-2">
            <p>優先度：{task.priority}</p>
            <p>締切日：{task.deadline}</p>
          </div>
          <Button onClick={() => deleteTask(task.id)} variant="delete">
            削除
          </Button>
        </li>
      ))}
    </ul>
  );
};
