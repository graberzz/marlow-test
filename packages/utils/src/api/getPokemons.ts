import { getIdByUrl, getImageUrlById } from "./helpers";
import { http } from "./http";
import { GetPokemonsArg, PaginatedList, Pokemon, RemotePokemon } from "./types";

export const getPokemons = async ({
  limit,
  offset,
}: GetPokemonsArg = {}): Promise<PaginatedList<Pokemon>> => {
  const { data } = await http.get<PaginatedList<RemotePokemon>>("/pokemon", {
    params: { limit, offset },
  });

  const results = data.results.map((pokemon) => {
    const id = getIdByUrl(pokemon.url);

    return {
      ...pokemon,
      id,
      imageUrl: getImageUrlById(id),
    };
  });

  return { ...data, results };
};
