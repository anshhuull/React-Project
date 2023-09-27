import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";

const App= () => {
  const expenses = [
    { title: "Household Expense", amount: 25000, date: new Date(2023, 4, 27) },
    { title: "Travel Expense", amount: 1300, date: new Date(2023, 5, 28) },
    { title: "Education fees", amount: 5000, date: new Date(2023, 6, 29) },
  ];

  return (
    <div>
      <h2>Hello Coders!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;