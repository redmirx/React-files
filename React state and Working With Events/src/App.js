import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "el-1",
      title: "Car Insurance",
      amount: 294.64,
      date: new Date(2022, 9, 18),
    },
    { id: "el-2", title: "New TV", amount: 799.49, date: new Date(2022, 8, 3) },
    {},
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}></Expenses>;
    </div>
  );
}
export { App };
