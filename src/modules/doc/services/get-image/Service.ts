import axios from "axios";
import { injectable } from "tsyringe";

import { appLogger } from "@shared/helpers/logger";
import { apiEnv } from "@core/config/env";

@injectable()
export class GetDogImageService {
    constructor() { }

    async execute() {
        try {
            const response = await axios.get(apiEnv.services.dog_image_api)

            appLogger.info('Dog image has been fetched')

            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}