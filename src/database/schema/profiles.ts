import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  first_name: text("first_name"),
  last_name: text("last_name"),

  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").$onUpdateFn(() => new Date()).notNull()
})
