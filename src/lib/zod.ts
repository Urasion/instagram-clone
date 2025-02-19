import { z } from 'zod';
export const loginSchema = z.object({
  email: z.string().email({
    message: 'Please submit it in email template',
  }),
  password: z.string(),
});

export const signUpSchema = z.object({
  email: z.string().email({
    message: 'Please submit it in email template',
  }),
  password: z
    .string()
    .min(8, { message: 'Please submit at least 8 characters' }),
  username: z.string(),
});
