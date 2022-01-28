import React, { FC } from 'react'
import { Text } from '~src/shared/style-components/Text'
import { Container } from './style'

const Footer: FC = () => {
  return (
    <Container data-testid='footer'>
      <Text scale='normal'>Created by Amirhossein Askari</Text>
    </Container>
  )
}

export default Footer
