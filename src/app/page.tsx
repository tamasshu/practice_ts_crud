"use client";

import styled from "styled-components";
import { colors, fonts, fontSizes } from "../styles/variables";
import { Form } from "../components/layout/Form";
import { List } from "../components/layout/List";
import { useTasks } from "../hooks/useTasks";
import { useDelete } from "../hooks/useDelete";
import { usePokemonList } from "../hooks/usePokemonList";

const Page: React.FC = () => {
  const { tasks, setTasks } = useTasks();
  const deleteTask = useDelete(setTasks);
  const pokemonList = usePokemonList();

  return (
    <PageContainer>
      <Title>Pokemon Todo App</Title>
      <Form setTasks={setTasks} pokemonOptions={pokemonList} />
      <Border />
      <List tasks={tasks} deleteTask={deleteTask} />
    </PageContainer>
  );
};

export default Page;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 32rem;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-family: ${fonts.heading};
  font-size: ${fontSizes.heading};
`;

const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.white};
`;
