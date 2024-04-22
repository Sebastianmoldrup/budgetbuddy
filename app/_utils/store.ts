import { create } from 'zustand';

export type ExpenseType = {
  id: number;
  title: string;
  amount: number;
  category?: string;
};

export type StateType = {
  expenses: ExpenseType[];
};

export type ActionsType = {
  addExpense: (
    id: number,
    title: string,
    amount: number,
    category?: string
  ) => void;
  removeExpense: (title: string) => void;
  clearExpenses: () => void;
};

export const useStore = create<StateType & ActionsType>()((set) => ({
  expenses: [],
  addExpense: (id: number, title: string, amount: number, category?: string) =>
    set((state) => ({
      expenses: [...state.expenses, { id, title, amount, category }],
    })),
  removeExpense: (title: string) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.title !== title),
    })),
  // updateExpense: (title: string, amount: number, category?: string) =>
  //   set((state) => ({})),
  clearExpenses: () =>
    set((state) => ({
      expenses: [],
    })),
}));
