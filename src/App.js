import React from "react";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const TEST_EXPENSES = [
  {
    id: "e1",
    title: "Household Expense",
    amount: 25000,
    date: new Date(2023, 4, 27),
  },
  {
    id: "e2",
    title: "Travel Expense",
    amount: 1300,
    date: new Date(2023, 5, 28),
  },
  {
    id: "e3",
    title: "Education fees",
    amount: 5000,
    date: new Date(2023, 6, 29),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(TEST_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;