import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import ListContainer from './ListContainer'

test('passing todo_list as incorrect type causes error', t => {
    const listcontainer = shallow(<ListContainer todo_list="[]"/>)
})

test('we can render the', t=> {

})