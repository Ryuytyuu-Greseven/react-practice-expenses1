import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseCreation/NewExpense";
import React, { useContext, useEffect, useState } from "react";
import AddUser from "./components/Project2/Users/AddUser";
import UsersList from "./components/Project2/Users/UsersLIst/UsersList";
import Header from "./components/Header/Header";
import Wrapper from "./components/Helpers/Wrapper";

// user login
import MainHeader from "./components/Project3/MainHeader/MainHeader";
import Login from "./components/Project3/Login/Login";
import Home from "./components/Project3/Home/Home";
import AuthContext, {
  AuthContextProvider,
} from "./components/contexts/auth-context";

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

  // navigation
  const [navigationMode, updateNavigation] = useState("expenses");

  /** Moved to logic to auth context */
  // user login
  // const [isLoggedIn, setUserLoggin] = useState("");
  // const userLoginStatus = sessionStorage.getItem("loginDetails");
  // useEffect(() => {
  //   if (userLoginStatus === "1") {
  //     setUserLoggin(true);
  //   }
  // }, []);
  const authCtx = useContext(AuthContext);

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

  // navigation
  const userNavigationUpdate = (navigation) => {
    updateNavigation(navigation);
  };

  /** Moved the logic to auth context */
  // user login
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   sessionStorage.setItem("loginDetails", "1");
  //   setUserLoggin(true);
  // };

  // const logoutHandler = () => {
  //   sessionStorage.setItem("loginDetails", "0");
  //   setUserLoggin(false);
  // };

  return (
    <React.Fragment>
      {(navigationMode === "expenses" || navigationMode === "users") && (
        <Wrapper>
          <Header
            header={navigationMode}
            selectNavigation={userNavigationUpdate}
          ></Header>
          {navigationMode === "expenses" && (
            <Wrapper>
              <NewExpense addNewExpense={expenseAddEvent} />
              <Expenses expenses={expensesList} />
            </Wrapper>
          )}
          {navigationMode === "users" && (
            <Wrapper>
              <AddUser addUser={usersAddEvent} />
              <UsersList users={usersList} />
            </Wrapper>
          )}
        </Wrapper>
      )}

      {navigationMode === "userlogin" && (
        <AuthContextProvider>
          <MainHeader />
          <main>
            {authCtx.isLoggedIn && <Login onLogin={authCtx.loginHandler} />}
            {authCtx.isLoggedIn && <Home onLogout={authCtx.logoutHandler} />}
          </main>
        </AuthContextProvider>
      )}
    </React.Fragment>
  );
}

export default App;
