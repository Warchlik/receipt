import { integer, pgEnum, pgTable, primaryKey, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { profiles } from "./profiles";
import { user } from "./auth-schema";

// table for storage receipt informations
export const receipts = pgTable('receipts', {
  id: uuid('id').defaultRandom().primaryKey(),

  token: uuid("token").notNull().defaultRandom().unique(),

  title: text("title").notNull(),
  description: text("description"),

  amount: integer("amount").notNull(),
  currency: text("currency").notNull().default("PLN"),
  people_count: integer("people_count").notNull(),
  category: text("category").default("other"),
  purchase_at: timestamp("purchase_at"),

  receipt_image_url: text("receipt_image_url"),

  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").defaultNow().$onUpdateFn(() => new Date()).notNull()
})

// asociating table for prepare ralation many to many in user(profiles) and receipts tables
export const receiptRoleEnum = pgEnum("receipt_role", ["creator", "member"])
export const user_receipts = pgTable("user_receipts", {
  role: receiptRoleEnum("role").notNull().default("member"),
  user_id: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  receipt_id: uuid("receipt_id").notNull().references(() => receipts.id, { onDelete: "cascade" }),

  amount_owed: integer("amount_owed"),
  paided_at: timestamp("paided_at"),
  joined_at: timestamp("joined_at").defaultNow(),
}, (table) => [
  primaryKey({ columns: [table.user_id, table.receipt_id] })
])

