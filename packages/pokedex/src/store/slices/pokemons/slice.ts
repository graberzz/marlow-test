import { AppState } from "@/store/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { pageToOffset } from "utils";
import { fetchPokemonDetails, fetchPokemons } from "./actions";
import { PokemonsState } from "./types";

const initialState: PokemonsState = {
  list: {
    results: [],
    count: 0,
    offset: 0,
  },
  loadingList: true,
  loadingDetails: true,
  details: {},
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loadingList = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        const resultsWithoutDuplicates = action.payload.results.filter(
          (v) => !state.list.results.some((v2) => v2.id === v.id)
        );

        state.loadingList = false;
        state.list = {
          results: state.list.results
            .concat(resultsWithoutDuplicates)
            .sort((a, b) => a.id - b.id),
          count: action.payload.count,
          offset: pageToOffset(action.meta.arg.page),
        };
      })
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.loadingDetails = true;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.loadingDetails = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(HYDRATE, (state, action) => {
        // @ts-expect-error hydrate action has payload
        const { pokemons }: AppState = action.payload;

        state.details = pokemons.details;
        state.loadingList = pokemons.loadingList;
        state.loadingDetails = pokemons.loadingDetails;
        state.list = pokemons.list;
      });
  },
});
