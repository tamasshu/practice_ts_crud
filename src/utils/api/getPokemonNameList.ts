import { fetchAPI } from "./fetchAPI";
import { getPokemonData } from "./getPokemonData";

const BASE_API_URL = "https://pokeapi.co/api/v2";

type PokemonNameList = {
  value: string;
  label: string;
};

type PokemonListResponse = {
  results: { name: string; url: string }[];
};

export const getPokemonNameList = async (): Promise<PokemonNameList[]> => {
  const url = `${BASE_API_URL}/pokemon?limit=100`;

  const response = await fetchAPI(url);
  const data: PokemonListResponse = response.data;

  if (!response.ifFetch) {
    throw new Error(response.error || "ポケモンリストの取得に失敗しました");
  }

  const pokemonList = await Promise.all(
    data.results.map(async (pokemon) => {
      const id = pokemon.url.split("/").filter(Boolean).pop();
      const pokemonData = await getPokemonData(Number(id));
      return { value: pokemonData.id.toString(), label: pokemonData.name };
    })
  );
  return pokemonList;
};
