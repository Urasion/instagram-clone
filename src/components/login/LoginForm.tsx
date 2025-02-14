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

export default function LoginForm() {
  const form = useForm();
  return (
    <div className="p-3 border rounded-lg space-y-4">
      <Form {...form}>
        <FormField
          control={form.control}
          name="id"
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
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
      <Button className="w-72 h-8 font-bold bg-green-500 hover:bg-green-600">
        Sign in
      </Button>
    </div>
  );
}
