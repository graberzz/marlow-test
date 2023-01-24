import { NextPage } from "next";
import { wrapper, useAppSelector } from "@/store";
import {
  fetchPokemons,
  getPokemonsByPage,
  getPokemonsSlice,
} from "@/store/slices/pokemons";
import { PokemonsGrid } from "components";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { PAGINATION_LIMIT } from "utils";
import { ParsedUrlQuery } from "querystring";

const Home: NextPage = () => {
  const router = useRouter();
  const { list, loadingList } = useAppSelector(getPokemonsSlice);
  const page = getPage(router.query);
  const pokemons = useAppSelector(getPokemonsByPage(page));

  return (
    <div className="container">
      <PokemonsGrid
        loading={loadingList}
        pokemons={pokemons}
        rowClassName={styles.row}
        totalCount={list.count}
        onClick={(id) => router.push(`/${id}`)}
        page={page - 1}
        onPageChange={(page) => {
          router.replace({
            query: { ...router.query, page: page + 1 },
          });
        }}
      />
    </div>
  );
};

const getPage = (query: ParsedUrlQuery) => {
  if (query.page && Number(query.page) > 0) {
    return Number(query.page);
  }

  return 1;
};

Home.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context) => {
    const page = getPage(context.query);
    const pageItems = getPokemonsByPage(page)(store.getState());

    if (pageItems?.length > 0) return;

    await store.dispatch(
      fetchPokemons({
        limit: PAGINATION_LIMIT,
        page,
      })
    );
  }
);

export default Home;
