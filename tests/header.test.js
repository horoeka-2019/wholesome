import React from 'react'
import { shallow } from 'enzyme'

import Header from '../client/components/Header'

test('<Header />', () => {
  const expected = 'NEVER'
  const wrapper = shallow(<Header />)
  expect(wrapper.text()).toMatch(expected)
})
