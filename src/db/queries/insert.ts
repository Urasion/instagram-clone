import { SignUp } from '@/type';
import { users } from '../schema';
import { db } from '../drizzle';
import bcrypt from 'bcryptjs';

export async function signUpUser(body: SignUp) {
  const result = await db.insert(users).values({
    password: bcrypt.hashSync(body.password),
    name: body.username,
    email: body.email,
  });
  return result;
}
