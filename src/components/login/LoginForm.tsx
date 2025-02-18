'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { signInWithCredentials } from '@/server-action/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/zod';
import { SignIn } from '@/type';

export default function LoginForm() {
  const form = useForm<SignIn>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          signInWithCredentials(data);
        })}
        className="p-3 rounded-lg border space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username or email address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username.."
                  {...field}
                  className="w-72 h-8 focus-visible:ring-blue-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password.."
                  {...field}
                  className="w-72 h-8 focus-visible:ring-blue-500"
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-72 h-8 font-bold bg-green-500 hover:bg-green-600"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </Form>
  );
}
