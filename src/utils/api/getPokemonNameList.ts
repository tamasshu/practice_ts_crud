import { fetchAPI } from "./fetchAPI";
import { getPokemonData } from "./getPokemonData";

const BASE_API_URL = "https://pokeapi.co/api/v2";

type PokemonNameList = {
  value: string;
  label: string;
};

export const getPokemonNameList = async (): Promise<PokemonNameList[]> => {
  const url = `${BASE_API_URL}/pokemon?limit=100`;
  const data = await fetchAPI(url);

  const pokemonList = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const id = pokemon.url.split("/").filter(Boolean).pop();
      const pokemonData = await getPokemonData(Number(id));
      return { value: pokemonData.id.toString(), label: pokemonData.name };
    })
  );
  return pokemonList;
};
