// Garrante que a aplicação não execute se as variaveis de ambiente ão existirem
import { z } from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.string().url().startsWith('postgresql://')
})

export const env = envSchema.parse(process.env)