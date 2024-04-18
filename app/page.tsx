'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useStore } from './_utils/store';
import { Button } from '@/components/ui/button';

export default function Home() {
  {
    /* 
  TODO: 

  External:
  - Buy budgetbuddy.no domain - godaddy
  - Create a logo for budgetbuddy - supabase / starter designs

  Input:
  - Create a form that allows users to input their income
  - Create a form that allows users to input their expenses

  Display:
  - Create a list that displays the expenses
  - Create a total that sums up the expenses

  Functionality:
  - Create a button that allows users to clear the expenses
  - Create a button that allows users to download the expenses

  */
  }

  const { expenses, addExpense } = useStore();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button onClick={() => addExpense('test', 100)}>Add Expense</Button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense.title + ' ' + expense.amount}</li>
        ))}
      </ul>
    </main>
  );
}
