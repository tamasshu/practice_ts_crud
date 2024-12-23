import { SubmitHandler, useForm } from "react-hook-form";
import { resolver } from "../../utils/validation";
import { getPokemonData } from "../../utils/api/getPokemonData";
import { SetTasksType } from "../../types/SetTasksType";
import { OptionType } from "../../types/OptionType";
import { TaskType } from "../../types/TaskType";
import { priorityOptions } from "../../constants/priorityOptions";
import { Input, Select, Button } from "../common/UIComponents";

type FormPropsType = {
  pokemonOptions: OptionType;
  setTasks: SetTasksType;
};

type FormDataType = {
  title: string;
  assignedPokemon: string;
  priority: string;
  deadline: string;
};

export const Form: React.FC<FormPropsType> = ({ pokemonOptions, setTasks }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({
    resolver: resolver,
  });

  const onSubmit: SubmitHandler<FormDataType> = async (task) => {
    const pokemonData = await getPokemonData(Number(task.assignedPokemon));
    const newTask: TaskType = {
      id: Date.now(),
      title: task.title,
      assignedPokemon: pokemonData.name,
      assignedPokemonImage: pokemonData.image,
      priority: task.priority,
      deadline: task.deadline,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-4 bg-white rounded shadow-md"
    >
      <div className="mb-4">
        <Input
          {...register("title")}
          type="text"
          placeholder="タスク名を入力"
          className="w-full px-3 py-2 border rounded"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <Select
          {...register("assignedPokemon")}
          options={pokemonOptions}
          name="assignedPokemon"
          placeholder="担当ポケモン"
          className="w-full px-3 py-2 border rounded"
        />
        {errors.assignedPokemon && (
          <p className="text-red-500 text-sm mt-1">
            {errors.assignedPokemon.message}
          </p>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        <Select
          {...register("priority")}
          options={priorityOptions}
          name="priority"
          placeholder="優先度"
          className="w-full px-3 py-2 border rounded"
        />

        <Input
          {...register("deadline")}
          type="date"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {errors.priority && (
        <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>
      )}
      {errors.deadline && (
        <p className="text-red-500 text-sm mt-1">{errors.deadline.message}</p>
      )}

      <div className="flex justify-end w-full mt-4">
        <Button type="submit" variant="submit">
          追加
        </Button>
      </div>
    </form>
  );
};
