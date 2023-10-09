import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  const addExpenseHandler= expense =>{
    console.log('In App.js');
    console.log(expense)
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  )
};


// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Hello Coders!"),
//   React.createElement(Expenses, { items: expenses })
// );


export default App;