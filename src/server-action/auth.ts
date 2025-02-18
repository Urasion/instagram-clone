'use server';
import { auth, signIn, signOut } from '@/auth';
import { SignIn } from '@/type';
import { AuthError } from 'next-auth';
export const signInWithCredentials = async (form: SignIn) => {
  try {
    await signIn('credentials', {
      email: form.email || '',
      password: form.password || '',
      redirect: true,
      redirectTo: '/',
      // redirectTo: '/' // 로그인 후 메인 페이지로 이동!
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CallbackRouteError':
          if (
            error.cause &&
            typeof error.cause === 'object' &&
            'err' in error.cause
          ) {
            const cause = error.cause as { err: { code?: string } };
            if (cause.err && cause.err.code === 'credentials') {
              return { error: 'Invalid credentials' };
            }
          }
        default:
          return { error: 'An authentication error occurred' };
      }
    }

    throw error;
  }
};
export const signOutWithForm = async () => {
  await signOut();
};
export { auth as getSession };
