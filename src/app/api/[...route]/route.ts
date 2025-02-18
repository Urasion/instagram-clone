import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { HTTPException } from 'hono/http-exception';

import { getUserByEmail } from '@/db/queries/select';

export const runtime = 'edge';
const app = new Hono().basePath('/api');
app.get('/user/:email', async (c) => {
  const email = c.req.param('email');
  const user = await getUserByEmail(email);
  if (!user) {
    throw new HTTPException(400, { message: 'user not found' });
  }
  return c.json({ user });
});
export const GET = handle(app);
export const POST = handle(app);
