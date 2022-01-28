import styled from 'styled-components'
import { FlexBox } from '~src/shared/style-components/FlexBox'
import { Input } from '~src/shared/style-components/Input'
import { Text } from '~src/shared/style-components/Text'

export const Container = styled(FlexBox).attrs({
  justify: 'space-between',
  alignItems: 'center',
})`
  height: 60px;
  padding: 20px;
  background: var(--theme-green);
`

export const SearchInput = styled(Input)`
  height: 40px;
  flex-grow: 2;
  max-width: 400px;
`

export const LogoContainer = styled(Text)`
  flex-grow: 3;
`
