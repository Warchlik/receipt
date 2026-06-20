import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/database/schemas/*",
  out: "./src/database/migrations",

  dbCredentials: {
    url: process.env.DATABASE_URL as string ?? "postgresql://receipt-user:123456@localhost:5432/receipt"
  },

  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },

  schemaFilter: ["public"],
  tablesFilter: ["!auth.*"],

  strict: true,
  verbose: true
});
