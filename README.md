## [ WORK IN PROGRESS ]

BudgetBuddy is an application designed to assist users in managing their finances. It allows users to input their monthly expenses, such as bills, subscriptions, and groceries, as well as their income. The app then calculates the remaining balance, enabling users to create effective budgeting plans.

## Pseudo code:

### packages

- Zustand - global store
- Shadcnui - component library
- TailwindCSS - styling
- Zod - form validation

### Store

#### variables

- Expenses[{}]

#### functions

- addExpense => (id, title, amount, category?)
- removeExpense => (id)
- editExpense => (id)
- clearExpenses => (expenses = [])
