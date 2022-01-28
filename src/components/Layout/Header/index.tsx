import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { IAlbum } from '~src/types/album'
import { ISong } from '~src/types/song'
import { Container, LogoContainer, SearchInput } from './style'
import debounce from 'lodash/debounce'
import { useSelector } from 'react-redux'
import { selectAllList as selectAllSongList } from '~src/redux/reducers/songList'
import { selectAllList as selectAllAlbumList } from '~src/redux/reducers/albumList'

interface HeaderProps {
  setSearchResult: React.Dispatch<React.SetStateAction<ISong[] | IAlbum[]>>
}

const Header: FC<HeaderProps> = ({ setSearchResult }) => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { albumList } = useSelector(selectAllAlbumList)
  const { songList } = useSelector(selectAllSongList)

  const [term, setTerm] = useState<string>('')

  useEffect(() => {
    if (!term || !(term && term.trim())) {
      setSearchResult([])
      return
    }

    const albumResults = albumList.filter(
      item =>
        item.title.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
        item.name.trim().toLowerCase().includes(term.trim().toLowerCase())
    )

    const songResults = songList.filter(
      item =>
        item.title.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
        item.name.trim().toLowerCase().includes(term.trim().toLowerCase())
    )
    setSearchResult(albumResults.concat(songResults).sort())
  }, [term])

  const changeSearchHandler = useCallback(
    debounce(() => {
      if (searchInputRef.current && !!searchInputRef.current.value) {
        setTerm(searchInputRef.current.value)
      } else {
        setTerm('')
      }
    }, 400),
    [searchInputRef.current && searchInputRef.current.value]
  )

  return (
    <Container data-testid='header'>
      <LogoContainer color='var(--white-color)' scale='large'>
        Hunome Task
      </LogoContainer>
      <SearchInput
        onChange={changeSearchHandler}
        ref={searchInputRef}
        placeholder='Search song or album'
        fontSize='normal'
        border='rounded'
      />
    </Container>
  )
}

export default Header
