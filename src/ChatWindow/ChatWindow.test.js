import React from 'react'
import { shallow } from 'enzyme'

import ChatWindow from './ChatWindow.js'

it('renders without props', () => {
  shallow(<ChatWindow />)
})
