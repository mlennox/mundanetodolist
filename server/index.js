import { create_logger } from '../logger'
import config from '../config'
import app from './app'
import router from './router'

const logger = create_logger('server')
logger.message('creating server')

logger.debug('adding routes')
app.use(router.routes())


app.listen(config.port, () => logger.message('server is now running on ' + config.host + ':' + config.port ))

