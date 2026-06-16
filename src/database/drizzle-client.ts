import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schemas/schemas"

const url: string = process.env.DATABASE_URL!;
const client = postgres(url, { prepare: false })

export const db = drizzle(client, { schema })
