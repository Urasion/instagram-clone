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

export default function SignUpForm() {
  const form = useForm();
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
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
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
          className="w-72 h-8 font-bold bg-green-500 hover:bg-green-600"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </Form>
  );
}
