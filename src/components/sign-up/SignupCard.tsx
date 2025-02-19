import React from 'react';
import SignUpForm from './SignUpForm';
import Link from 'next/link';

export default function SignupCard() {
  return (
    <div className="flex flex-col flex-auto">
      <div>
        <span>Already have an account?</span>
        <Link href={'/sign-in'}>
          <span>Sign in</span>
        </Link>
      </div>
      <SignUpForm />
    </div>
  );
}
