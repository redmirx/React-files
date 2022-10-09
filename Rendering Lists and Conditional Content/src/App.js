import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "el-1",
    title: "Car Insurance",
    amount: 294.64,
    date: new Date(2022, 9, 18),
  },
  { id: "el-2", title: "New TV", amount: 799.49, date: new Date(2022, 8, 3) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>;
    </div>
  );
}
export { App };
