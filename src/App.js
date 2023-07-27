import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseCreation/NewExpense";

function App() {
  const expenses = [
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
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
