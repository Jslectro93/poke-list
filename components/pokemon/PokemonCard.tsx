import * as React from "react";
import { Card, Grid, Image, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces/pokemon-list";
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
  children?: React.ReactNode;
}

export const PokemonCard: React.FC<Props> = ({pokemon: {id, name, img}}) => {

  const router = useRouter();
  const onClick = () => {
    router.push(`/name/${name}`);
  }

  return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card isHoverable isPressable onClick={onClick}>
            <Card.Body>
              <Card.Header>
                <Row justify="center">
                  <Text h4 transform="capitalize">
                    #{id} - {name}
                  </Text>
                </Row>
              </Card.Header>
              <Image src={img} alt={name} />
            </Card.Body>
          </Card>
        </Grid>
     
  );
};
