import { pgSchema, uuid } from "drizzle-orm/pg-core"

const authSchema = pgSchema('auth')
const authUser = authSchema.table('users', {
  id: uuid('id').primaryKey()
})
