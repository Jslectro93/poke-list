import { Container, Text, Image } from '@nextui-org/react'
import { NextPage } from 'next'
import React from 'react'

export const NoFavorites: NextPage = () => {
  return (
    <Container
          css={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 100px)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text h1>No hay favoritos</Text>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg`}
            alt="pokemon"
            width={200}
            height={200}
            css={{
              opacity: 0.1,
            }}
          />
        </Container>
  )
}
