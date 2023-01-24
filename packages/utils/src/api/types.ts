export type GetPokemonsArg = {
  limit?: number;
  offset?: number;
};

export type PaginatedList<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type RemotePokemon = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
};

export type RemotePokemonDetails = {
  id: number;
  name: string;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
};

export type PokemonDetails = {
  id: number;
  name: string;
  imageUrl: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
};
