import GoogleLoginButton from '@/components/login/GoogleLoginButton';
import LoginForm from '@/components/login/LoginForm';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <>
      <h1 className="text-2xl">Sign in</h1>
      <LoginForm />
      <GoogleLoginButton />
      <Link href={'/signup'} className="text-sm text-blue-500 hover:underline">
        Create an account
      </Link>
    </>
  );
}
