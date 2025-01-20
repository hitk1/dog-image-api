import { appLogger } from '@shared/helpers/logger'
import 'dotenv/config'
import { z } from 'zod'


const apiEnvSchema = z.object({
    DOC_API_URL: z.string().url().min(1)
})

let loadedEnv: z.infer<typeof apiEnvSchema>

try {
    loadedEnv = apiEnvSchema.parse(process.env)
} catch (error) {
    if (error instanceof z.ZodError) {
        appLogger.error(
            {
                environment_variable_errors: {
                    errors: error.issues.map(issue => issue.message),
                    path: error.errors.map(error => error.path[0])
                }
            },
            'API Error -> Erro on try to load environment variables'
        )

        process.exit(1)
    }
}

export { loadedEnv }