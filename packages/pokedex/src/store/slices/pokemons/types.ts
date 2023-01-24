import { Pokemon, PokemonDetails } from "utils";

export type PokemonsState = {
  list: {
    results: Array<Pokemon>;
    count: number;
    offset: number;
  };
  loadingList: boolean;
  loadingDetails: boolean;
  details: Record<number, PokemonDetails>;
};
