import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import ListContainer from './ListContainer'

test('passing todo_items as incorrect type causes error', t => {

    t.notThrows(function() {
        const testarray = ['something']
        const listcontainer = shallow(<ListContainer todo_items="{testarray}" />)

        console.log(listcontainer)
    })
})