import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  console.log(showForm);

  const onStartEditingHandler = () => {
    setShowForm(true);
    console.log(showForm);
  };

  const onStopEditingHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onStopEditingHandler}
        />
      ) : (
        <button onClick={onStartEditingHandler}>Add New Expense</button>
      )}

      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
    </div>
  );
}
