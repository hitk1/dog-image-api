import { loadedEnv } from "./parse.env";

const apiEnv = {
    services: {
        dog_image_api: loadedEnv.DOC_API_URL
    }
}

export { apiEnv }