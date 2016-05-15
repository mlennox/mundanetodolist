/**
 * Created by mlennox on 15/05/2016.
 */
import debug_logger from 'debug'

// TODO : use pretty printer in 'message' to always expand full object properties

export const create_logger = (module_name, suffix) => {
    const label = module_name + ((suffix) ? ':' + suffix : '')
    return {
        debug: debug_logger('app:' + label),
        error: debug_logger('app:error:' + label),
        /**
         * Use this to always show a console.log message despite the DEBUG settings
         */
        message: (...message_args) => {
            console.log.apply(null, [label, '-', ...message_args])
        }
    }
}