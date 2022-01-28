import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchAlbumList, selectAllList } from '~src/redux/reducers/albumList'
import Loader from '~components/Loader'
import SongCard from '~components/SongCard'
import { Container } from './style'

const Albums: FC = () => {
  const { albumList, isLoading, hasError } = useSelector(selectAllList)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAlbumList())
  }, [])

  useEffect(() => {
    if (hasError) {
      history.replace('/error')
    }
  }, [hasError])

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      {albumList.map(item => (
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

export default Albums
