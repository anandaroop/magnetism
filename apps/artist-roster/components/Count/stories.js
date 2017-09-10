import React from 'react'

import { storiesOf } from '@storybook/react'

import Count from '.'

storiesOf('Count', module)
  .add('with a small number', () => {
    const props = { name: 'follows', value: 99 }
    return <Count {...props} />
  })
  .add('with a large number', () => {
    const props = { name: 'follows', value: 65432 }
    return <Count {...props} />
  })
