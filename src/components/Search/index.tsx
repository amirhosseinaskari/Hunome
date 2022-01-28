import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IAlbum } from '~src/types/album'
import { ISong } from '~src/types/song'
import SongCard from '../SongCard'
import { Container } from './style'

interface SearchProps {
  list: ISong[] | IAlbum[]
}

const Search: FC<SearchProps> = ({ list = [] }) => {
  return (
    <Container>
      {list.map(item => (
        <SongCard
          key={item.id}
          image={item.image}
          artist={item.name}
          title={item.title}
          price={item.price}
        />
      ))}
    </Container>
  )
}

export default React.memo(Search)
