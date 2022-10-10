import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  const [FilteredYear, setFilteredYear] = useState("2020");

  const saveExpenseDateHandler = (pickedExpenseDate) => {
    const pickedDate = pickedExpenseDate;
    setFilteredYear(pickedDate);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === Number(FilteredYear);
  });
  // console.log(FilteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={FilteredYear}
          onSaveDate={saveExpenseDateHandler}
        />

        {filterdExpenses.map((value) => {
          return (
            // <div>
            <ExpenseItem
              key={value.id}
              title={value.title}
              date={value.date}
              amount={value.amount}
            />
            // </div>
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
