import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import Link from 'next/link';
import LoginForm from './LoginForm';
export default function LoginCard() {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg border gap-4">
      <h1 className="text-2xl font-bold">Sign in to Continue</h1>
      <LoginForm />
      <div className="w-full flex items-center justify-center relative my-4">
        <div className="w-14 h-[0.5px] bg-gray-400 absolute left-2 top-3" />
        <span className="text-sm text-gray-400">
          continue with social login
        </span>
        <div className="w-14 h-[0.5px] bg-gray-400 absolute right-2 top-3" />
      </div>
      <GoogleLoginButton />
      <Link href={'/sign-up'} className="text-sm text-blue-500 hover:underline">
        Create an account
      </Link>
    </div>
  );
}
