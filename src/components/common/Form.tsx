import { SubmitHandler, useForm } from "react-hook-form";
import { resolver } from "../../utils/validation";
import { getPokemonData } from "../../utils/api/getPokemonData";
import { SetTasksType } from "../../types/SetTasksType";
import { OptionType } from "../../types/OptionType";
import { TaskType } from "../../types/TaskType";
import { Button, Input, Select } from "./UIComponents";

type FormPropsType = {
  pokemonOptions: OptionType;
  setTasks: SetTasksType;
};

type FormDataType = {
  title: string;
  assignedPokemon: string;
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

      <div className="mb-4">
        <Select
          {...register("assignedPokemon")}
          options={pokemonOptions}
          name="assignedPokemon"
          placeholder="担当ポケモンを選択"
          className="w-full px-3 py-2 border rounded"
        />
        {errors.assignedPokemon && (
          <p className="text-red-500 text-sm mt-1">
            {errors.assignedPokemon.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <Button type="submit" variant="submit">
          追加
        </Button>
      </div>
    </form>
  );
};
