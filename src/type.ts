import { z } from 'zod';
import { loginSchema } from './lib/zod';
import { users } from './db/schema';

export type SignIn = z.infer<typeof loginSchema>;
export type User = typeof users.$inferSelect;
