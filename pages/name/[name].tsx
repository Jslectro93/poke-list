import { useEffect, useState } from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Card, Grid, Image, Text, Button, Container } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { Layout } from "../../components/layout";
import pokeApi from "../../api/pokeApi";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { localFavorites } from "../../utils";
import getPokemonInfo from "../../utils/getPokemonInfo";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(
    localFavorites.isThereAPokemon(pokemon.id)
  );

  // const [isFavorite, setIsFavorite] = useState(false);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsFavorite(!isFavorite);

    !isFavorite && confetti();
  };

  // useEffect(() => {
  //   setIsFavorite(localFavorites.isThereAPokemon(pokemon.id));
  // }
  // ,[])

  return (
    <Layout title={pokemon.name}>
      <Grid.Container
        css={{
          marginTop: "5px",
        }}
        gap={2}
      >
        <Grid xs={12} sm={4}>
          <Card isHoverable>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
              }}
            ></Card.Header>

            <Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                "/no-image.png"
              }
              alt={pokemon.name}
              width="100%"
              height="100%"
            />
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card isHoverable>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Text
                css={{
                  textTransform: "capitalize",
                  alignSelf: "center",
                }}
                h1
              >
                {pokemon.name}
              </Text>
              <Button
              
                color="gradient"
                ghost={!isFavorite}
                onClick={onToggleFavorite}
              >
                {isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text h2> Sprites: </Text>
              <Container display="flex" direction="row">
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemonsNames: string[] = data.results.map((pokemon) => pokemon.name);
  return {
    paths: pokemonsNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
  //   const paths = data.results.map((pokemon) => ({
  //     params: { name: pokemon.name },
  //   }));
  //   return {
  //     paths,
  //     fallback: false,
  //   };
  // };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonByNamePage;
