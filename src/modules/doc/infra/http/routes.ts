import { Router } from 'express'

import { GetDogImageController } from '@modules/doc/services/get-image/Controller'

const dogRoutes = Router()

//Controllers
const getImageController = new GetDogImageController()

dogRoutes.get(
    '/image',
    //@ts-ignore
    getImageController.handle
)

export { dogRoutes }