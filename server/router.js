/**
 * Created by mlennox on 15/05/2016.
 */
import _router from 'koa-router'
import { create_logger } from '../logger'

const logger = create_logger('router')

const router = new _router()

const add_routes = (module_router) => {
    logger.debug('adding route :', module_router)
    router.use('',module_router.middleware())
}

export default router

// for convenience!
logger.message('routes registered for this app')
logger.message('-----------------------------------------')
router.stack.forEach(function(data){
    logger.message(data.path)
})
logger.message('-----------------------------------------')