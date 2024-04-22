import { useStore } from '../_utils/store';

export default function ExpensesList() {
  const { expenses } = useStore();
  return (
    <ul className='space-y-2'>
      {expenses.map((expense, index) => (
        <li key={index} className='bg-background text-foreground p-2 w-full'>
          <div className='flex items-baseline justify-between text-md gap-x-4'>
            <div className=''>{expense.title}</div>
            <div className=''>{expense.amount},-</div>
          </div>
          <div className='text-xs'>{expense.category ?? ''}</div>
        </li>
      ))}
    </ul>
  );
}
