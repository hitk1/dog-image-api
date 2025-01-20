import { Router } from 'express'

import { dogRoutes } from '@modules/doc/infra/http/routes'

//Api Routes
const apiRoutes = Router()

//Private Routes
const privateRoutes = Router()

privateRoutes.use('/dog', dogRoutes)

apiRoutes.use('/api/priv', privateRoutes)


export { apiRoutes }