import { colors, fontSizes } from "../../styles/variables";
import styled from "styled-components";
import { FormProps } from "../../types/FormProps";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { Button } from "../common/Button";
import { useAdd } from "../../hooks/useAdd";

export const Form: React.FC<FormProps> = ({ pokemonOptions, setTasks }) => {
  const { register, handleSubmit, errors, onSubmit } = useAdd(setTasks);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormContents>
        <Input
          {...register("title")}
          type="text"
          placeholder="タスク名を入力"
        />

        <Select
          {...register("assignedPokemon")}
          options={pokemonOptions}
          name="assignedPokemon"
          placeholder="担当ポケモンを選択"
        />

        <Button type="submit" variant="submit">
          追加
        </Button>
      </FormContents>

      {errors.title && <Error>{errors.title.message}</Error>}
      {errors.assignedPokemon && (
        <Error>{errors.assignedPokemon.message}</Error>
      )}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const FormContents = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
`;

const Error = styled.p`
  color: ${colors.pink};
  font-size: ${fontSizes.small};
  font-weight: 500;
`;
