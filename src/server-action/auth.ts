'use server';
import { auth, signIn, signOut } from '@/auth';
import { SignIn } from '@/type';
export const signInWithCredentials = async (form: SignIn) => {
  const result = await signIn('credentials', {
    email: form.email || '',
    password: form.password || '',
    // redirectTo: '/' // 로그인 후 메인 페이지로 이동!
  });
  if (!result) {
    console.log('EEEEEEEEEEEEEE');
  }
};
export const signOutWithForm = async () => {
  await signOut();
};
export { auth as getSession };
