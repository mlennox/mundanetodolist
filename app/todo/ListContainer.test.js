import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import ListContainer from './ListContainer'

const console_error = console.error

// AVA runs each test in a different process so we need to setup the console fake before each test
test.beforeEach(t => {
    console.error = (log_message) => {
        t.context.log_message = log_message
    }
})

test.afterEach(t => {
    console.error = console_error
})

test('passing todo_items as incorrect type throws propTypes warning', t => {
    const listcontainer = shallow(<ListContainer todo_items="sgdgsdg" />)
    t.is(0, t.context.log_message.indexOf('Warning: Failed propType: Invalid prop `todo_items`'))
})

test('passing todo_items as correct type', t => {
    // a convoluted test....

    // we expect to see the length of the todo_items array added to the P tag as the second node
    const expected_index_in_nodes = 1
    // we assign this array to the todo_list prop
    const test_array = ['something']
    const listcontainer = shallow(<ListContainer todo_items={test_array} />)
    // we find the P tag in the rendered component
    const result = listcontainer.find('#main p').children()
    
    t.truthy(result.nodes.indexOf(test_array.length) === expected_index_in_nodes)
})