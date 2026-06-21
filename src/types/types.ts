import { user } from "@/database/schemas/auth-schema"
import { expenses } from "@/database/schemas/expenses"
import { profiles } from "@/database/schemas/profiles"
import { receipts, user_receipts } from "@/database/schemas/receipts"

export type User = typeof user.$inferSelect
export type NewUser = typeof user.$inferInsert

export type Profile = typeof profiles.$inferSelect
export type NewProfile = typeof profiles.$inferInsert

export type Receipt = typeof receipts.$inferSelect
export type NewReceipt = typeof receipts.$inferInsert

export type Expense = typeof expenses.$inferSelect
export type NewExpense = typeof expenses.$inferInsert

export type UserReceipt = typeof user_receipts.$inferSelect
export type NewUserReceipt = typeof user_receipts.$inferInsert
