import { z } from 'zod';
import { loginSchema, signUpSchema } from './lib/zod';
import { users } from './db/schema';

export type SignIn = z.infer<typeof loginSchema>;
export type SignUp = z.infer<typeof signUpSchema>;
export type User = typeof users.$inferSelect;
