import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

const connectionString = process.env.SB_POSTGRES_CONNECTION_STRING
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql)

await migrate(db, { migrationsFolder: './drizzle/migrations' })

await sql.end()
