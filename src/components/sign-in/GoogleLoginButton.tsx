'use clinet';
import React from 'react';
import { Button } from '../ui/button';
import GoogleLogo from '../svg/GoogleLogo';

export default function GoogleLoginButton() {
  return (
    <Button variant="outline" className="w-80">
      <GoogleLogo />
      Sign in with Google
    </Button>
  );
}
