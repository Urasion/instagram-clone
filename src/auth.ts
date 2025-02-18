import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from './db/drizzle';
import { eq } from 'drizzle-orm';
import { users } from './db/schema';
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'password ', type: 'password' },
      },
      authorize: async (credentials) => {
        let user = null;
        const { email, password } = (await credentials) as {
          email: string;
          password: string;
        };
        const query = await db
          .select()
          .from(users)
          .where(eq(users.email, email));
        user = query[0];
        if (!user || !user.password) {
          return null;
        }
        const passwordMatched = await bcrypt.compare(password, user.password);
        if (!passwordMatched) {
          return null;
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig);
