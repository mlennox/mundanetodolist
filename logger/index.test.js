/**
 * Created by mlennox on 15/05/2016.
 */
import test from 'ava'
import mockonsole from '../test_utils/mockonsole'
import { create_logger, __RewireAPI__ as loggerRewire } from './index'

test.before(() => {
    loggerRewire.__Rewire__('debug_logger', function(module_name, suffix) {
        // we rewire the debug library to only set the passed module name and suffix
        return {module_name, suffix}
    })
})

test.after(() => {
    loggerRewire.__ResetDependency__('debug_logger')
})

test.beforeEach(t => {
    mockonsole.mock(t, mockonsole.log)
})

test.afterEach(() => {
    mockonsole.restore()
})

test('logger should properly set the label to "app:testlabel"', t => {
    var test_label = 'testlabel'
    var expected_label = 'app:testlabel'

    var logger = create_logger(test_label)
    t.is(expected_label, logger.debug.module_name)
    t.deepEqual(null, logger.debug.suffix)
})

test('logger message applies params to console.log', t => {
    const test_label = 'some_label'
    const test_message = 'we expect this message'

    const logger = create_logger(test_label)

    logger.message(test_message)

    const actual_log_message = t.context.log_message.join('')

    t.is(actual_log_message, test_label + '-' + test_message)
})