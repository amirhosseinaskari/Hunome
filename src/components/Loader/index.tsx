import React, { FC } from 'react'
import { Text } from '~src/shared/style-components/Text'
import './style.scss'

const Loader: FC = () => {
  return (
    <div className='container'>
      <Text
        as='span'
        scale='large'
        weight='bold'
        color='var(--normal-font-color)'
      >
        Loading ...
      </Text>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
