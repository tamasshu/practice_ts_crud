import Image from "next/image";
import { Button } from "../common/UIComponents";
import { TaskType } from "../../types/TaskType";
import { priorityMap } from "../../constants/priorityMap";

type ModalPropsType = {
  task: TaskType;
  onClose: () => void;
  onConfirm: () => void;
};

export const Modal: React.FC<ModalPropsType> = ({
  task,
  onClose,
  onConfirm,
}) => {
  return (
    <div className="fixed inset-0 bg-darkBlue bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-16 text-center">
          本当に削除しますか？
        </h2>
        <div className="flex flex-col items-center mb-16">
          <p className="mb-4">ポケモン：{task.assignedPokemon}</p>
          {task.assignedPokemonImage && (
            <Image
              src={task.assignedPokemonImage}
              alt={task.assignedPokemon}
              width={80}
              height={80}
              className="w-40 h-40"
            />
          )}
          <h3 className="mb-4">{task.title}</h3>
          <p className="mb-4">優先度：{priorityMap[task.priority]}</p>
          <p className="mb-4">締切日： {task.deadline}</p>
        </div>
        <div className="flex justify-center gap-6">
          <Button onClick={onClose} type="button" variant="cancel">
            キャンセル
          </Button>
          <Button onClick={onConfirm} type="button" variant="delete">
            削除
          </Button>
        </div>
      </div>
    </div>
  );
};
