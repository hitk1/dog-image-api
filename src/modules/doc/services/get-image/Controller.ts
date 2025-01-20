import { Request, Response} from 'express'

import { GetDogImageService } from './Service'
import { container } from 'tsyringe'

export class GetDogImageController {
    async handle(request: Request, response: Response){
        const service = container.resolve(GetDogImageService)
        const result = await service.execute()

        return response.json(result)
    }
}