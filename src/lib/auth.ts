import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  database: new Pool({ connectionString: process.env.DATABASE_URL }),
  emailAndPassword: { enabled: true },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 mins — no DB call for session checks
    },
  },
  user: {
    additionalFields: {
      role: { type: "string", defaultValue: "user" },
    },
  },
});
