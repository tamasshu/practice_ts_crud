import { FormProps } from "../../types/FormProps";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { Button } from "../common/Button";
import { useAdd } from "../../hooks/useAdd";

export const Form: React.FC<FormProps> = ({ pokemonOptions, setTasks }) => {
  const { register, handleSubmit, errors, onSubmit } = useAdd(setTasks);

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

      <div className="flex gap-2">
        <Select
          {...register("assignedPokemon")}
          options={pokemonOptions}
          name="assignedPokemon"
          placeholder="担当ポケモン"
          className="w-full px-3 py-2 border rounded"
        />

        <Select
          {...register("priority")}
          options={[
            { value: "low", label: "低" },
            { value: "medium", label: "中" },
            { value: "high", label: "高" },
          ]}
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

      {errors.assignedPokemon && (
        <p className="text-red-500 text-sm mt-1">
          {errors.assignedPokemon.message}
        </p>
      )}
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
