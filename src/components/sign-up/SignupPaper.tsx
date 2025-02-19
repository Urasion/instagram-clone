import React from 'react';
import SignUpForm from './SignUpForm';
import Link from 'next/link';
export default function SignupPaper() {
  return (
    <div className="flex flex-col flex-auto items-center gap-10">
      <div className="w-full flex justify-end text-gray-600 text-sm space-x-3 p-6">
        <span>Already have an account?</span>
        <Link href={'/sign-in'}>
          <span className="underline">Sign in</span>
        </Link>
      </div>
      <SignUpForm />
    </div>
  );
}
