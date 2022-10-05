import { NewExpenseComponent } from "./components/Expenses/NewExpenseComponent";
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
    {
      date: new Date(2022, 9, 12),
      title: "New mobile phone",
      price: 1234.14,
    },
  ];
  return (
    <div>
      <NewExpenseComponent expenses={expenses} />
    </div>
  );
}

export { App };
