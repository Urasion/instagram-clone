import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from './db/drizzle';
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
        const response = await fetch(`http://localhost:3000/api/user/${email}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user: ${response.statusText}`);
        }
        user = await response.json();

        const passwordMatched = await bcrypt.compare(password, user.password);
        if (!passwordMatched) {
          throw new Error(`Invalid Password`);
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
        return {
          ...token,
          id: user.id,
        };
      }
      return { token };
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      } as typeof session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
});
