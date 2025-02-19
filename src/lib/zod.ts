import { z } from 'zod';
export const loginSchema = z.object({
  email: z.string().email({
    message: 'Please submit it in email template',
  }),
  password: z.string(),
});
