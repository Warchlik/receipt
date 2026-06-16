import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/database/schemas/*",
  out: "./src/database/migrations",

  dbCredentials: {
    // url: process.env.DATABASE_URL as string ?? "postgresql://postgres.slzhwrjgjwfygnsqlahh:Kalkulator1@aws-1-eu-central-1.pooler.supabase.com:6543/postgres"
    url: process.env.DATABASE_URL as string ?? "postgresql://postgres:postgres@127.0.0.1:54322/postgres"
  },

  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },

  // schemaFilter: ["public", "auth"],
  schemaFilter: ["public"],
  tablesFilter: ["!auth.*"],

  strict: true,
  verbose: true
});
