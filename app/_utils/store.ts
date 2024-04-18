import { create } from 'zustand';

export type ExpenseType = {
  title: string;
  amount: number;
  category?: string;
};

export type StateType = {
  expenses: ExpenseType[];
};

export type ActionsType = {
  addExpense: (title: string, amount: number, category?: string) => void;
  removeExpense: (title: string) => void;
  clearExpenses: () => void;
};

export const useStore = create<StateType & ActionsType>()((set) => ({
  expenses: [],
  addExpense: (title: string, amount: number, category?: string) =>
    set((state) => ({
      expenses: [...state.expenses, { title, amount, category }],
    })),
  removeExpense: (title: string) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.title !== title),
    })),
  clearExpenses: () =>
    set((state) => ({
      expenses: [],
    })),
}));
