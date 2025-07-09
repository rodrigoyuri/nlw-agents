import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connections.ts'
import { schema } from './schema/index.ts'

// Zera o banco
await reset(db, schema)

// Executa as seeds
await seed(db, schema)
    .refine((f) => {
        return {
            rooms: {
                count: 20,
                columns: {
                    name: f.companyName(),
                    description: f.loremIpsum(),
                },
            },
            questions: {
                count: 28,
            }
        }
    })

// Para de executar ao terminar
await sql.end()

// biome-ignore lint/suspicious/noConsole: only use in dev
console.log("AQUI SEED")