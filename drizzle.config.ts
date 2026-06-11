import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/database/schema/*",
  out: "./src/supabase/migrations",

  dbCredentials: {
    url: process.env.DATABASE_URL as string
  },

  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },

  strict: true,
  verbose: true
});
