/**
 * Created by mlennox on 15/05/2016.
 */
import test from 'ava'
import routes from './routes'

test('number of routes specified', t => {
    const expected_route_count = 2
    t.is(expected_route_count, routes.stack.length)
})

test('prefix should be home', t => {
    t.is('/home', routes.opts.prefix)
})


