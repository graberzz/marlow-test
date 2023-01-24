import { getImageUrlById, getStatByName } from "./helpers";
import { http } from "./http";
import { PokemonDetails, RemotePokemonDetails } from "./types";

export const getPokemonDetails = async (
  id: number
): Promise<PokemonDetails> => {
  const { data } = await http.get<RemotePokemonDetails>(`/pokemon/${id}`);

  return {
    ...data,
    imageUrl: getImageUrlById(data.id),
    stats: {
      hp: getStatByName(data, "hp"),
      attack: getStatByName(data, "attack"),
      defense: getStatByName(data, "defense"),
      speed: getStatByName(data, "speed"),
    },
  };
};
