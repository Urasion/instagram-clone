import { signUpUser } from '@/db/queries/insert';
import { getUserByEmail } from '@/db/queries/select';
import { verifyAuth } from '@hono/auth-js';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
export const user = new Hono();
user.get('/:email', verifyAuth(), async (c) => {
  const email = c.req.param('email');
  const user = await getUserByEmail(email);
  if (!user) {
    throw new HTTPException(400, { message: 'user not found' });
  }
  return c.json({ user }, 200);
});

user.post('/sign-up', async (c) => {
  const body = await c.req.json();
  const user = await getUserByEmail(body.email);
  if (user) {
    throw new HTTPException(400, { message: 'user already exist' });
  }
  const result = signUpUser(body);
  if (!result) {
    throw new HTTPException(400, { message: 'something wrong' });
  }
  return c.json(null, 200);
});
