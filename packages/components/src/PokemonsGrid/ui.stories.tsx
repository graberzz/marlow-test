import { PokemonsGrid, PokemonsGridProps } from "./ui";
import { Meta, Story } from "@storybook/react";

export default {
  title: "PokemonsGrid",
  component: PokemonsGrid,
} as Meta<PokemonsGridProps>;

export const Primary: Story<PokemonsGridProps> = (props) => (
  <div style={{ height: "100vh" }}>
    <PokemonsGrid {...props} />
  </div>
);

Primary.args = {
  pokemons: [
    {
      id: 1,
      name: "bulbasaur",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 2,
      name: "ivysaur",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      id: 3,
      name: "venusaur",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      id: 4,
      name: "charmander",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  ],
  loading: false,
  page: 1,
  rowClassName: "className",
  totalCount: 1000,
};
