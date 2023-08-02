import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseCreation/NewExpense";
import { useState } from "react";
import AddUser from "./components/Project2/Users/AddUser";
import UsersList from "./components/Project2/Users/UsersLIst/UsersList";

const staticExpenses = [
  {
    id: 1,
    title: "Expense 1",
    amount: 200,
    date: new Date("2020-05-05"),
  },
  {
    id: 2,
    title: "Expense 2",
    amount: 200,
    date: new Date("2022-07-15"),
  },
  {
    id: 3,
    title: "Expense 3",
    amount: 210,
    date: new Date("2022-08-16"),
  },
  {
    id: 4,
    title: "Expense 4",
    amount: 200,
    date: new Date(),
  },
];

function App() {
  const [expensesList, updateExpenses] = useState(staticExpenses);

  const [usersList, updateUsers] = useState([]);

  // add a new expense to the list
  const expenseAddEvent = (event) => {
    // console.log(event);
    const newExpense = {
      id: expensesList.length + 1,
      title: event.expenseTitle,
      amount: +event.expenseAmount,
      date: event.expenseDate,
    };

    updateExpenses((previousState) => {
      return [newExpense, ...previousState];
    });
  };

  // add a new user to users list
  const usersAddEvent = (event) => {
    const newUser = {
      id: usersList.length + 1,
      name: event.username,
      age: event.age,
    };
    updateUsers((previousState) => {
      return [...previousState, newUser];
    });
    // updateUsers([...usersList, newUser]);
  };

  return (
    <div>
      <NewExpense addNewExpense={expenseAddEvent} />
      <Expenses expenses={expensesList} />

      <AddUser addUser={usersAddEvent} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
