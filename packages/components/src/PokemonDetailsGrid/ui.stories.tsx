import { PokemonDetailsGrid, PokemonDetailsGridProps } from "./ui";
import { Meta, Story } from "@storybook/react";

export default {
  title: "PokemonDetailsGrid",
  component: PokemonDetailsGrid,
} as Meta<PokemonDetailsGridProps>;

export const Primary: Story<PokemonDetailsGridProps> = (
  PokemonDetailsGridprops
) => (
  <div style={{ height: "100vh" }}>
    <PokemonDetailsGrid {...PokemonDetailsGridprops} />
  </div>
);

Primary.args = {
  pokemonsDetails: {
    id: 1,
    name: "bulbasaur",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    stats: {
      hp: 45,
      defense: 49,
      attack: 45,
      speed: 49,
    },
  },
  loading: false,
};
