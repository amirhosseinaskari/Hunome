import styled from 'styled-components'
import { FlexBox } from '~src/shared/style-components/FlexBox'
import { Text } from '~src/shared/style-components/Text'

export const Container = styled(FlexBox)`
  flex-shrink: 1;
  width: 400px;
  min-width: 250px;
  margin: 12px;
  padding: 20px;
  border: 1px solid var(--carbon-light-color);
  border-radius: 6px;
  background-color: var(--white-color);
`

export const ImageWrapper = styled.div`
  box-shadow: 10px 10px 12px rgba(94, 89, 89, 0.1);
  border-radius: 6px;
`

export const Image = styled.img`
  height: 100%;
  border-radius: 6px;
`

export const ContentWrapper = styled(FlexBox).attrs({
  direction: 'column',
})`
  width: 100%;
  margin-left: 20px;
  overflow: hidden;
`

export const Title = styled(Text)`
  font-size: 16px;
  font-weight: '500';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Artist = styled(Title)`
  font-size: 14px;
`

export const Price = styled(Text)`
  font-size: 16px;
  font-weight: 500;
`
