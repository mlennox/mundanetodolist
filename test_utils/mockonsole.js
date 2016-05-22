/**
 * Created by mlennox on 22/05/2016.
 */
const stored_consoles = {
    log: console.log,
    warn: console.warn,
    error: console.error
}

const console_target = {
    log: 'log',
    warn: 'warn',
    error: 'error'
}

const create_mock = (test_context, target) => {
    console[target] = (...messages) => {
        test_context.context[target + '_message'] = messages.length > 1 ? [...messages] : messages[0]
    }
}

const mock = (test_context, target) => {
    let targets = []
    if (!target){
        targets = Object.keys(stored_consoles)
    } else {
        if (console_target[target]){
            targets.push(target)
        } else {
            throw new Error('please provide one of log, warn or error and not "' + target + '"')
        }
    }

    targets.forEach((tgt) => create_mock(test_context, tgt))
}

/**
 * Restores all mocks
 */
const restore = () => {
    console.log = stored_consoles.log
    console.warn = stored_consoles.warn
    console.error = stored_consoles.error
}

export default {
    mock,
    restore,
    log: console_target.log,
    warn: console_target.warn,
    error: console_target.error
}
