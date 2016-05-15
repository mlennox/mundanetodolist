import { argv } from 'yargs'
import { create_logger } from '../logger'
const logger = create_logger('config')

const default_port = 3000
const default_host = 'http://localhost'

const config = {
    port: argv.port || default_port,
    host: argv.host || default_host
}

logger.message('configuration : ', config)

export default config