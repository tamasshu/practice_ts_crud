import { fetchAPI } from "./fetchAPI";

const BASE_API_URL = "https://pokeapi.co/api/v2";

type PokemonDataType = {
  id: number;
  name: string;
  image: string;
  error: string | null;
};

type SpeciesDataType = {
  names: { language: { name: string }; name: string }[];
};

export const getPokemonData = async (
  id: PokemonDataType["id"]
): Promise<PokemonDataType> => {
  try {
    const url = `${BASE_API_URL}/pokemon/${id}`;
    const pokemonResponse = await fetchAPI(url);
    const pokemonData = pokemonResponse.data;

    const speciesUrl = `${BASE_API_URL}/pokemon-species/${id}`;
    const speciesResponse = await fetchAPI(speciesUrl);
    const speciesData: SpeciesDataType = speciesResponse.data;
    const nameEntry = speciesData.names?.find(
      (entry) => entry.language.name === "ja"
    );

    return {
      id: id,
      name: nameEntry ? nameEntry.name : "不明",
      image: pokemonData.sprites.other["official-artwork"].front_default || "",
      error: null,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "エラーが発生しました";
    return {
      id: id,
      name: "不明",
      image: "",
      error: errorMessage,
    };
  }
};
