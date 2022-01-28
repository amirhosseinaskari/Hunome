import React, { FC, useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Text } from '~src/shared/style-components/Text'
import { IAlbum } from '~src/types/album'
import { ISong } from '~src/types/song'
import Search from '../Search'
import Footer from './Footer'
import Header from './Header'
import { Body, Container, Switcher } from './style'

const Layout: FC = ({ children }) => {
  const location = useLocation()
  const [searchResult, setSearchResult] = useState<ISong[] | IAlbum[]>([])
  useEffect(() => {
    console.log(searchResult)
  }, [searchResult])
  return (
    <Container>
      <Header setSearchResult={setSearchResult} />
      <Switcher>
        <Link to='/'>
          <Text
            as='span'
            scale='normal'
            color={
              location.pathname === '/'
                ? 'var(--blue-color)'
                : 'var(--normal-font-color)'
            }
            margin='0 4px'
          >
            Songs
          </Text>
        </Link>
        /
        <Link to='/albums'>
          <Text
            margin='0 4px'
            as='span'
            scale='normal'
            color={
              location.pathname === '/albums'
                ? 'var(--blue-color)'
                : 'var(--normal-font-color)'
            }
          >
            Albums
          </Text>
        </Link>
      </Switcher>
      <Body>
        {searchResult.length > 0 ? <Search list={searchResult} /> : children}
      </Body>
      <Footer />
    </Container>
  )
}

export default Layout
