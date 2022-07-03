import { Grid, Card, Image } from '@nextui-org/react'
import * as React from 'react'
import { useRouter } from 'next/router';

type Props = {
    children?: React.ReactNode,
    id: number,
}

export const FavoriteCardPokemon: React.FC<Props>= ({id}) => {

    const router = useRouter();

    const handleFavorite = () => {
        router.push(`/pokemon/${id}`);
    }

  return (
    <Grid xs={6} sm={3} onClick={handleFavorite}>
    <Card isHoverable isPressable css={{padding: '10'}}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width="100%"
        height="100%"
      />
    </Card>
  </Grid>
  )
}
