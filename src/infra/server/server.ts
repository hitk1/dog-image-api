import 'reflect-metadata'
import 'dotenv/config'
import { createServer } from 'http'

import { api } from '../express/app'
import { appLogger } from '@shared/helpers/logger'

const httpServer = createServer(api)

function gracefulShutdown(_code: string) {
    return (event: any) => {
        console.info(`${event} signal received with code ${event}`)
        console.info('Closing http server...')

        console.info('Websocket has been closed')

        httpServer.close(async () => {
            console.info('Http server closed.')

            console.info('Database connection closed.')
            process.exit(1)
        })
    }
}

(async () => {
    const port = Number(process.env.PORT) || 3333

    httpServer.listen(port, () => appLogger.info(`Server is running or port: ${port}`))
})()

process.on('SIGTERM', gracefulShutdown('SIGTERM'))
process.on('SIGINT', gracefulShutdown('SIGINT'))

process.on('unhandledRejection', (error, _origin) => console.info('\nUnhandled rejection signal received.', error))
process.on('uncaughtException', (error, origin) => console.info(`\n${origin} signal received.`, error))
process.on('exit', code => console.info('Exit signal received.', code))
