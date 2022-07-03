import * as React from 'react';
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { NoFavorites } from "../../components/ui";
import { Layout } from "../../components/layout/Layout";
import { localFavorites } from "../../utils";
import { FavoritePokemon } from "../../components/pokemon";

interface Props {
  children?: React.ReactNode;
}

const Favorites: NextPage<Props> = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.pokemons());
  }, []);

  return (
    <div>
      <Layout title="pagina de favoritos">
        {
        !favorites 
        ? (<NoFavorites />) 
        : (<FavoritePokemon favorites={favorites} />)
        }
      </Layout>
    </div>
  );
};

export default Favorites;
