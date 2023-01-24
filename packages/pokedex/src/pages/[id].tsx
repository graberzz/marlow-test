import { useAppSelector, wrapper } from "@/store";
import {
  fetchPokemonDetails,
  getPokemonDetails,
  getPokemonsSlice,
} from "@/store/slices/pokemons";
import { PokemonDetailsGrid } from "components";
import { NextPage } from "next";
import { useRouter } from "next/router";

const PokemonDetails: NextPage = () => {
  const router = useRouter();
  const details = useAppSelector(getPokemonDetails(Number(router.query.id)));
  const loading = useAppSelector(getPokemonsSlice).loadingDetails;

  return (
    <div className="container">
      <PokemonDetailsGrid loading={loading} pokemonsDetails={details} />
    </div>
  );
};

PokemonDetails.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context) => {
    const id = Number(context.query.id);
    const details = getPokemonDetails(id)(store.getState());

    if (details) return;

    await store.dispatch(fetchPokemonDetails(id));
  }
);

export default PokemonDetails;
