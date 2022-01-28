import styled from 'styled-components'
import { FlexBox } from '~src/shared/style-components/FlexBox'

export const Container = styled(FlexBox).attrs({
  justify: 'space-between',
  alignItems: 'center',
})`
  height: 200px;
  padding: 20px;
`
