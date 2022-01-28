import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FlexBox } from '~src/shared/style-components/FlexBox'

export const Container = styled(FlexBox).attrs({
  direction: 'column',
})`
  min-height: 100vh;

  a {
    text-decoration: none;
    color: none;
  }
`
export const Body = styled(FlexBox).attrs({
  direction: 'column',
  alignItmes: 'center',
})`
  flex-grow: 1;
  padding: 20px;
`

export const Switcher = styled(FlexBox).attrs({
  alignItems: 'center',
})`
  padding: 24px;
`
