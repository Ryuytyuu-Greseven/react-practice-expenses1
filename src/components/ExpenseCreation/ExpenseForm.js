import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // multiple states
  // const [newTitle, setTitleState] = useState("");
  // const [newAmount, setAmountState] = useState("");
  // const [newDate, setDateState] = useState("");
  // const titleChangeHandler = (event) => {
  //   console.log(event.target.value);
  //   setTitleState(event.target.value);
  // };
  // const amountChangeHandler = (event) => {
  //   console.log(event.target.value);
  //   setAmountState(event.target.value);
  // };
  // const dateChangeHandler = (event) => {
  //   console.log(event.target.value);
  //   setDateState(event.target.value);
  // };

  const [newExenseDetails, setNewExpenseDetails] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });
  // const titleChangeHandler = (event) => {
  //   // setNewExpenseDetails({
  //   //   ...newExenseDetails,
  //   //   expenseTitle: event.target.value,
  //   // });

  //   setNewExpenseDetails((previousState) => {
  //     return { ...previousState, expenseTitle: event.target.value };
  //   });
  // };
  // const amountChangeHandler = (event) => {
  //   // setNewExpenseDetails({
  //   //   ...newExenseDetails,
  //   //   expenseAmount: event.target.value,
  //   // });
  //   setNewExpenseDetails((previousState) => {
  //     return { ...previousState, expenseAmount: event.target.value };
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   // setNewExpenseDetails({
  //   //   ...newExenseDetails,
  //   //   expenseDate: event.target.value,
  //   // });
  //   setNewExpenseDetails((previousState) => {
  //     return { ...previousState, expenseDate: event.target.value };
  //   });
  // };

  const sharedFormUpdateHandler = (type, value) => {
    console.log(type, value);
    setNewExpenseDetails((previousState) => {
      if (type === "title") {
        return { ...previousState, expenseTitle: value };
      } else if (type === "amount") {
        return { ...previousState, expenseAmount: value };
      } else {
        return { ...previousState, expenseDate: value };
      }
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => {
              sharedFormUpdateHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={(event) => {
              sharedFormUpdateHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={(event) => {
              sharedFormUpdateHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
