import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchSongList, selectAllList } from '~src/redux/reducers/songList'
import Loader from '~components/Loader'
import SongCard from '~components/SongCard'
import { Container } from './style'

const Songs: FC = () => {
  const { songList, isLoading, hasError } = useSelector(selectAllList)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSongList())
  }, [])

  useEffect(() => {
    if (hasError) {
      history.replace('/error')
    }
  }, [hasError])

  console.log(songList)

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      {songList.map(item => (
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

export default Songs
