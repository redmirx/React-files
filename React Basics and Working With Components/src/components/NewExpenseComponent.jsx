import React from "react";
import Card from "./Card";
import { ExpenseItem } from "./ExpenseItem";
import "./expenses.css";

export function NewExpenseComponent(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        price={props.expenses[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        price={props.expenses[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        price={props.expenses[2].price}
      ></ExpenseItem>
    </Card>
  );
}
