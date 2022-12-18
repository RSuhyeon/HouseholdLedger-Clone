import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const [clicked, setClicked] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseClickHandler = () => {
    setClicked(true);
  };

  let formContent = (
    <button onClick={addNewExpenseClickHandler}>Add New Expense</button>
  );
  if (clicked) {
    formContent = (
      <ExpenseForm
        onClick={setClicked}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{formContent}</div>;
}
