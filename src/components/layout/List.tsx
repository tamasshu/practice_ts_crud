import { colors, fontSizes } from "../../styles/variables";
import styled from "styled-components";
import { ListProps } from "../../types/ListProps";
import { Button } from "../common/Button";

export const List: React.FC<ListProps> = ({ tasks, deleteTask }) => {
  return (
    <ListContainer>
      {tasks.map((task) => (
        <ListItemContainer key={task.id}>
          <AssignedPokemon>
            {task.assignedPokemon}
            <PokemonImage
              src={task.assignedPokemonImage}
              alt={task.assignedPokemon}
            />
          </AssignedPokemon>
          <Title>{task.title}</Title>
          <Button onClick={() => deleteTask(task.id)} variant="delete">
            削除
          </Button>
        </ListItemContainer>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  width: 100%;
`;

const ListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 0.8rem;
  background-color: ${colors.white};
  border-radius: 0.4rem;
`;

const Title = styled.span`
  font-weight: 700;
`;

const AssignedPokemon = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  font-size: ${fontSizes.small};
`;

const PokemonImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;
