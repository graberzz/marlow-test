import { PAGINATION_LIMIT } from "./constants";
import { RemotePokemonDetails } from "./types";

export const getIdByUrl = (url: string) => Number(url.split("/").slice(-2)[0]);

export const getImageUrlById = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const getStatByName = (data: RemotePokemonDetails, name: string) =>
  data.stats.find((stat) => stat.stat.name === name)?.base_stat ?? 0;

export const offsetToPage = (offset: number, limit = PAGINATION_LIMIT) =>
  Math.ceil(offset / limit);

export const pageToOffset = (page: number, limit = PAGINATION_LIMIT) =>
  (page - 1) * limit;
