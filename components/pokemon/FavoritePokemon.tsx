import * as React from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "../pokemon";

type Props = {
  children?: React.ReactNode;
  favorites: number[];
};

export const FavoritePokemon: React.FC<Props> = ({ favorites }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favorites.map((id) => (
        <FavoriteCardPokemon id={id} key={id}/>
      ))}
    </Grid.Container>
  );
};
