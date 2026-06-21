import { db } from "@/database/drizzle-client"
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import * as schemas from "@/database/schemas/schemas"
import { COOKIE_PREFIX } from "./auth/auth.constants"

export const auth = betterAuth({
  plugins: [
    nextCookies()
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schemas
  }),
  emailAndPassword: {
    minPasswordLength: 8,
    enabled: true
  },
  advanced: {
    cookiePrefix: COOKIE_PREFIX
  }
  // socialProviders: {
  //   google: {
  //     clientId: process.env.GOOGLE_CLIENT_ID as string,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  //   },
  //   github: {
  //     clientId: process.env.GITHUB_CLIENT_ID as string,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  //   },
  // }
})
