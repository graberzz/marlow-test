import { AppState } from "@/store/types";
import { PAGINATION_LIMIT } from "utils";

export const getPokemonsSlice = (state: AppState) => state.pokemons;

export const getPokemonsList = (state: AppState) =>
  getPokemonsSlice(state).list;

export const getPokemonsByPage =
  (page: number, limit = PAGINATION_LIMIT) =>
  (state: AppState) => {
    const items = getPokemonsList(state).results;
    const start = (page - 1) * limit;
    const end = page * limit;

    return items.slice(start, end);
  };

export const getPokemonDetails = (id: number) => (state: AppState) =>
  getPokemonsSlice(state).details[id];
