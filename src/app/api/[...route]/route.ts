import { Context, Hono } from 'hono';
import { handle } from 'hono/vercel';
import { HTTPException } from 'hono/http-exception';
import { AuthConfig, initAuthConfig } from '@hono/auth-js';
import { getUserByEmail } from '@/db/queries/select';
import { user } from './user';
import { authConfig } from '@/auth.config';
export const runtime = 'nodejs';
function getAuthConfig(c: Context): AuthConfig {
  return {
    secret: c.env.AUTH_SECRET,
    ...authConfig,
  };
}
const app = new Hono().basePath('/api');
app.get('/user/:email', async (c) => {
  const email = c.req.param('email');
  const user = await getUserByEmail(email);
  if (!user) {
    throw new HTTPException(400, { message: 'user not found' });
  }
  return c.json({ user });
});
app.use('*', initAuthConfig(getAuthConfig));
app.route('/user', user);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
