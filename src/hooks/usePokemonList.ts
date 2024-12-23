import { useEffect, useState } from "react";
import { getPokemonNameList } from "../utils/api/getPokemonNameList";

type PokemonOptionType = {
  value: string;
  label: string;
};

export const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<PokemonOptionType[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const list = await getPokemonNameList();
      setPokemonList(list);
    };
    fetchPokemonList();
  }, []);

  return pokemonList;
};
