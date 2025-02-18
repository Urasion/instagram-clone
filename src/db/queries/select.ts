import { eq } from 'drizzle-orm';
import { db } from '../drizzle';
import { users } from '../schema';
import { User } from '@/type';

export async function getUserByEmail(email: string): Promise<User> {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  return result[0];
}
