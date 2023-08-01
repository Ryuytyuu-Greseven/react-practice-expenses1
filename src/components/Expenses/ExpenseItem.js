import { useState } from "react";
import Card from "../UI/Cards/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  let staticVal = 1;
  const expenseDate = new Date(props.expense.date);
  const expenseAmount = props.expense.amount;
  const [expenseTitle, setTitle] = useState(props.expense.title);

  const changeHandler = () => {
    staticVal++;
    // dispatching the new value to display the value when user click on CHANGE TITLE
    setTitle("New Value " + staticVal);
    console.log("Changed! ", staticVal);
  };

  return (
    <li>
      <Card className={`${true ? 'expense-item' : ''}`}>
        <ExpenseDate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
        </div>
        <div className="expense-item__price">${expenseAmount}</div>
        <button onClick={changeHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
