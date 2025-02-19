import React from 'react';
import SignUpForm from './SignUpForm';
import Link from 'next/link';
import { LucideArrowRight } from 'lucide-react';
export default function SignUpPaper() {
  return (
    <div className="flex flex-col flex-auto items-center gap-10">
      <div className="w-full flex justify-end text-gray-600 text-sm space-x-3 p-6">
        <span>Already have an account?</span>
        <Link href={'/sign-in'} className="flex items-center space-x-2">
          <span className="underline">Sign in</span>
          <LucideArrowRight size={15} />
        </Link>
      </div>
      <SignUpForm />
    </div>
  );
}
