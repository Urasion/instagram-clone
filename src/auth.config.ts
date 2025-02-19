import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from './db/drizzle';
import { eq } from 'drizzle-orm';
import { users } from './db/schema';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
export const authConfig = {
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        pasword: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const query = await db
          .select()
          .from(users)
          .where(eq(users.email, email));
        const user = query[0];
        if (!user || !user.password) {
          throw new Error('error');
        }
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) {
          throw new Error('error');
        }
        return user;
      },
    }),
    GitHub,
    Google,
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
} satisfies NextAuthConfig;
