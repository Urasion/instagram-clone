import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

/* export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
}); */

import { config } from 'dotenv';
config({ path: '.env' });
export default defineConfig({
  schema: './src/db/schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.SUPA_DATABASE_URL!,
  },
});
