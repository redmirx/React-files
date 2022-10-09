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

  console.log(FilteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={FilteredYear}
          onSaveDate={saveExpenseDateHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        />
      </Card>
    </div>
  );
}

export default Expenses;
