import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonDetails, pageToOffset } from "utils";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  ({ limit, page }: { limit: number; page: number }) =>
    getPokemons({ limit, offset: pageToOffset(page) })
);

export const fetchPokemonDetails = createAsyncThunk(
  "pokemons/fetchPokemonDetails",
  (id: number) => getPokemonDetails(id)
);
