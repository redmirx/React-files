import "./ExpenseItem.css";

export function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 21th 2022</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">294.62</div>
      </div>
    </div>
  );
}
