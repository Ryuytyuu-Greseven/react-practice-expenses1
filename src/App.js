import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseCreation/NewExpense";
import { useState } from "react";

function App() {
  const [expensesList, updateExpenses] = useState([
    {
      id: 1,
      title: "Expense 1",
      amount: 200,
      date: new Date(),
    },
    {
      id: 2,
      title: "Expense 2",
      amount: 200,
      date: new Date(),
    },
    {
      id: 3,
      title: "Expense 3",
      amount: 200,
      date: new Date(),
    },
    {
      id: 4,
      title: "Expense 4",
      amount: 200,
      date: new Date(),
    },
  ]);

  // add a new expense to the list
  const expenseAddEvent = (event) => {
    // console.log(event);
    const newExpense = {
      id: expensesList.length + 1,
      title: event.expenseTitle,
      amount: event.expenseAmount,
      date: event.expenseDate,
    };

    updateExpenses((previousState) => {
      return [...previousState, newExpense];
    });
  };

  return (
    <div>
      <NewExpense addNewExpense={expenseAddEvent} />
      <Expenses expenses={expensesList} />
    </div>
  );
}

export default App;
