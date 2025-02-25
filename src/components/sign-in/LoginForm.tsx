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
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/zod';
import { SignIn } from '@/type';
import useToast from '@/hook/useToast';
import { signInWithCredentials } from '@/service/auth';

export default function LoginForm() {
  const form = useForm<SignIn>({
    resolver: zodResolver(loginSchema),
  });
  const { toast } = useToast();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (data) => {
          try {
            await signInWithCredentials(data);
          } catch (err) {
            if (err instanceof Error) {
              toast('warning', err.message);
              form.setError('root', err);
            }
          }
        })}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
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
                  placeholder="Password"
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
          className="w-72 h-8 font-bold bg-black hover:bg-gray-900/80"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </Form>
  );
}
