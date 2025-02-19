'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { LucideChevronRight } from 'lucide-react';
import { SignUp } from '@/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '@/lib/zod';
export default function SignUpForm() {
  const form = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  });
  return (
    <Form {...form}>
      <form onSubmit={() => {}} className="flex flex-col flex-auto space-y-4">
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
                  className="w-[420px] h-10 focus-visible:ring-black"
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
                  className="w-[420px] h-10 focus-visible:ring-black"
                  type="password"
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Password should be at least 8 characters
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username"
                  {...field}
                  className="w-[420px] h-10 focus-visible:ring-blue-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-[420px] h-10 font-bold bg-black hover:bg-gray-900/80 flex items-center"
          type="submit"
        >
          <span className="h-full">Continue</span>
          <LucideChevronRight />
        </Button>
      </form>
    </Form>
  );
}
