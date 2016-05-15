import { argv } from 'yargs'

const default_port = 3000

const config = {
    port: argv.port || default_port
}

export default config