import styled from 'styled-components'
import { FlexBox } from '~src/shared/style-components/FlexBox'

export const Container = styled(FlexBox).attrs({
  direction: 'column',
})`
  padding: 20px;
  flex-grow: 1;
`
