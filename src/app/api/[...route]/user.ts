import { getUserByEmail } from '@/db/queries/select';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

export const user = new Hono();
user.get('/:email', async (c) => {
  const email = c.req.param('email');
  const user = await getUserByEmail(email);
  if (!user) {
    throw new HTTPException(400, { message: 'user not found' });
  }
  return c.json({ user });
});
