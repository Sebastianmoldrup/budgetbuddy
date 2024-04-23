'use client';
import { useStore } from '../_utils/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { get } from 'http';

export default function AddExpenseForm() {
  const { expenses, addExpense } = useStore();
  // console.log(expenses);

  const formSchema = z.object({
    title: z.string().min(2, {
      message: 'Navn.',
    }),
    amount: z.string().min(1, {
      message: 'Pris.',
    }),
    category: z.string().min(2, {
      message: 'Kategori.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      amount: '',
      category: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // If there are no expenses, set the id to 0, otherwise set it to the length of the expenses array
    const newId = expenses.length === 0 ? 0 : expenses.length;
    console.log(newId);
    // Add the new expense to the store
    addExpense(newId, values.title, parseInt(values.amount), values.category);
    // console.log(JSON.stringify(values));
    setCookie(`expense_${newId}`, values);
    // Reset the form
    form.reset();
  }

  function setCookie(name: string, value: object): void {
    // Make a cookie that gets updated with more expenses, so cookie.value = {} + new expense {}
    document.cookie = `${name}=${JSON.stringify(value)}`;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <h2 className='text-2xl font-bold'>Legg til utgift</h2>
        {/* 
        Title
         */}
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Navn</FormLabel>
              <FormControl>
                <Input
                  className='text-foreground'
                  placeholder='Navn'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 
        Amount
         */}
        <FormField
          control={form.control}
          name='amount'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pris</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  className='text-foreground'
                  placeholder='Pris'
                  onChange={(e) => {
                    const value = e.target.value;
                    const regex = /^[0-9]+$/;
                    if (value.includes('e')) {
                      return;
                    }
                    regex.test(value) ? field.onChange(e) : null;
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 
        Category
         */}
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kategori</FormLabel>
              <FormControl>
                <Input
                  className='text-foreground'
                  placeholder='Kategori'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Legg til</Button>
      </form>
    </Form>
  );
}
