import React, { FC, useLayoutEffect } from 'react'
import { Button } from '~src/shared/style-components/Button'
import { Text } from '~src/shared/style-components/Text'
import { Container } from './style'
import { useHistory } from 'react-router-dom'
const Error: FC = () => {
  const history = useHistory()
  const onClickHandler = () => {
    history.replace('/')
  }
  return (
    <Container>
      <Text scale='large' weight='bold' color='var(--alert-color)'>
        Something Went Wrong!
      </Text>
      <Button
        border='none'
        fontSize='large'
        color='var(--white-color)'
        defaultBackColor='var(--black-color)'
        size='large'
        onClick={onClickHandler}
      >
        Retry
      </Button>
    </Container>
  )
}

export default Error
