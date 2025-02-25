'use server';
import { auth, signIn, signOut } from '@/auth';
import { SignIn, SignUp } from '@/type';
import { AuthError } from 'next-auth';
import { instance } from './axios';
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

export const signUp = async (form: SignUp) => {
  const { email, password, username } = form;
  const result = instance.post('/user/sign-up', {
    email,
    password,
    username,
  });
  return result;
};
