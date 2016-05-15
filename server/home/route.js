/**
 * Created by mlennox on 15/05/2016.
 */
import { create_logger } from '../../logger'
import _router from 'koa-router'

const logger = create_logger('home', 'router')

const router = new _router({
    prefix: '/home'
})

router.all('test', (ctx, next) => {
  logger.message('got here')
})

