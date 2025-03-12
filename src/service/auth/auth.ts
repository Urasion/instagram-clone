'use server';
import { auth, signOut } from '@/auth';

export const signOutWithForm = async () => {
  await signOut();
};
export { auth as getSession };
