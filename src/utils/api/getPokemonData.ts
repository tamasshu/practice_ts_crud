import { fetchAPI } from "./fetchAPI";

const BASE_API_URL = "https://pokeapi.co/api/v2";

type PokemonData = {
  id: number;
  name: string;
  image: string;
};

export const getPokemonData = async (
  pokemonId: number
): Promise<PokemonData> => {
  const url = `${BASE_API_URL}/pokemon/${pokemonId}`;
  const pokemonData = await fetchAPI(url);

  const speciesUrl = `${BASE_API_URL}/pokemon-species/${pokemonId}`;
  const speciesData = await fetchAPI(speciesUrl);

  const nameEntry = speciesData.names.find(
    (entry: { language: { name: string }; name: string }) =>
      entry.language.name === "ja"
  );

  return {
    id: pokemonId,
    name: nameEntry ? nameEntry.name : "不明",
    image: pokemonData.sprites.other["official-artwork"].front_default || "",
  };
};
