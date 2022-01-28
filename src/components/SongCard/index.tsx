import React, { FC } from 'react'
import { Button } from '~src/shared/style-components/Button'
import { Text } from '~src/shared/style-components/Text'
import {
  Container,
  ImageWrapper,
  Image,
  Title,
  Artist,
  ContentWrapper,
  Price,
} from './style'

export interface SongCardProps {
  image: string
  artist: string
  price: string
  title: string
}

const SongCard: FC<SongCardProps> = ({ title, image, artist, price }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={image} loading='lazy' />
      </ImageWrapper>
      <ContentWrapper>
        <Title as='strong' scale='large'>
          {title}
        </Title>
        <Artist>{artist}</Artist>
        <Price>{price}</Price>
      </ContentWrapper>
    </Container>
  )
}

export default SongCard
