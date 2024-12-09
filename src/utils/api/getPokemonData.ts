import { fetchAPI } from "./fetchAPI";

const BASE_API_URL = "https://pokeapi.co/api/v2";

type PokemonData = {
  id: number;
  name: string;
  image: string;
};

type SpeciesData = {
  names: { language: { name: string }; name: string }[];
};

export const getPokemonData = async (
  pokemonId: number
): Promise<PokemonData> => {
  const url = `${BASE_API_URL}/pokemon/${pokemonId}`;
  const speciesUrl = `${BASE_API_URL}/pokemon-species/${pokemonId}`;

  const pokemonResponse = await fetchAPI(url);
  const pokemonData = pokemonResponse.data;

  if (!pokemonResponse.ifFetch) {
    throw new Error(
      pokemonResponse.error || "ポケモンデータの取得に失敗しました"
    );
  }

  const speciesResponse = await fetchAPI(speciesUrl);
  const speciesData: SpeciesData = speciesResponse.data;

  if (!speciesResponse.ifFetch) {
    throw new Error(
      speciesResponse.error || "ポケモンの種族データの取得に失敗しました"
    );
  }

  const nameEntry = speciesData.names?.find(
    (entry) => entry.language.name === "ja"
  );

  return {
    id: pokemonId,
    name: nameEntry ? nameEntry.name : "不明",
    image: pokemonData.sprites.other["official-artwork"].front_default || "",
  };
};
