import { ExpenseItem } from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      date: new Date(2021, 3, 28),
      title: "Car Insurance",
      price: 294.67,
    },
    {
      date: new Date(2022, 7, 3),
      title: "New desktop computer",
      price: 6094.67,
    },
  ];
  return (
    <div>
      <h1>Hello World</h1>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      ></ExpenseItem>
    </div>
  );
}

export { App };
