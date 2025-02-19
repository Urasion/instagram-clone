import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import Link from 'next/link';
import LoginForm from './LoginForm';
export default function LoginCard() {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg border space-y-3">
      <h1 className="text-2xl font-bold">Sign in to Continue</h1>
      <span></span>
      <LoginForm />
      <div className="flex items-center justify-center space-x-4">
        <div className="w-12 h-[0.5px] bg-gray-400" />
        <span className="text-gray-400">continue with social login</span>
        <div className="w-12 h-[0.5px] bg-gray-400" />
      </div>
      <GoogleLoginButton />
      <Link href={'/sign-up'} className="text-sm text-blue-500 hover:underline">
        Create an account
      </Link>
    </div>
  );
}
