import React from 'react';

export default function SignUpBanner() {
  return (
    <div className="flex flex-auto justify-center bg-[url('/sign-up-image.jpg')] bg-cover">
      <span className="text-4xl text-white font-bold mt-20 select-none">
        Create your free account
      </span>
    </div>
  );
}
