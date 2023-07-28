import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [newTitle, setTitleState] = useState("");
  const [newAmount, setAmountState] = useState("");
  const [newDate, setDateState] = useState("");

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setTitleState(event.target.value);
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setAmountState(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setDateState(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
