import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import mockonsole from '../../test_utils/mockonsole'

import ListContainer from './ListContainer'

// AVA runs each test in a different process so we need to setup the console console_fake before each test
test.beforeEach(t => {
    mockonsole.mock(t, mockonsole.error)
})

test.afterEach(t => {
    mockonsole.restore()
})

test('passing todo_items as incorrect type throws propTypes warning', t => {
    const listcontainer = shallow(<ListContainer todo_items="sgdgsdg" />)
    t.is(0, t.context.error_message.indexOf('Warning: Failed propType: Invalid prop `todo_items`'))
})

test('passing todo_items as correct type', t => {
    // a convoluted test....

    // we assign this array to the todo_list prop
    const test_array = ['something','and another', 'summat else']
    const listcontainer = shallow(<ListContainer todo_items={test_array} />)

    const child_displaying_count = listcontainer.find('#main p').children().nodes[1]

    t.truthy(child_displaying_count === test_array.length)
})