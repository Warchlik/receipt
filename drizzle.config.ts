import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/database/schema/*",
  out: "./src/lib/supabase/migrations",

  dbCredentials: {
    url: process.env.DATABASE_URL as string ?? "postgresql://postgres.slzhwrjgjwfygnsqlahh:Kalkulator1@aws-1-eu-central-1.pooler.supabase.com:6543/postgres"
  },

  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },

  schemaFilter: ["public", "auth"],

  strict: true,
  verbose: true
});
