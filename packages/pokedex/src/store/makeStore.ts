import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { pokemonsSlice } from "./slices/pokemons";

export const makeStore = () =>
  configureStore({
    reducer: {
      [pokemonsSlice.name]: pokemonsSlice.reducer,
    },
  });

export const wrapper = createWrapper(makeStore);

export const store = makeStore()
