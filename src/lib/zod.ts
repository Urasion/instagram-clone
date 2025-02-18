import { z } from 'zod';
export const loginSchema = z.object({
  email: z.string().email({
    message: 'need email..',
  }),
  password: z.string().min(8, {
    message: 'password must be at least 8 characters',
  }),
});
