import { create_logger } from '../logger'
import config from '../config'
import app from './app'

const logger = create_logger('server')

logger.message('creating server')

app.listen(config.port, () => logger.message('server is now running on ' + config.host + ':' + config.port ))

