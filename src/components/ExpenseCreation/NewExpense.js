import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addingStatus, setAddingStatus] = useState(false);
  const addExpenseHandler = (event) => {
    props.addNewExpense(event);
  };

  const enableStatus = () => {
    setAddingStatus(true);
  };

  const disableStatus = () => {
    setAddingStatus(false);
  };

  return (
    <div className="new-expense">
      {!addingStatus && (
        <button type="button" onClick={enableStatus}>
          Add New Expense!
        </button>
      )}

      {addingStatus && (
        <ExpenseForm addExpense={addExpenseHandler} onCancel={disableStatus} />
      )}
    </div>
  );
};

export default NewExpense;
