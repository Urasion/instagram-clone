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
    });
    return true;
  } catch (error) {
    if (error instanceof AuthError) {
      throw new Error('Incorrect username or password.');
    }
  }
};
export const signOutWithForm = async () => {
  await signOut();
};
export { auth as getSession };
