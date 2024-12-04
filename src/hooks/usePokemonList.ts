import { useEffect, useState } from "react";
import { getPokemonNameList } from "../utils/api/getPokemonNameList";

type PokemonOption = {
  value: string;
  label: string;
};

export const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<PokemonOption[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const list = await getPokemonNameList();
      setPokemonList(list);
    };
    fetchPokemonList();
  }, []);

  return pokemonList;
};
