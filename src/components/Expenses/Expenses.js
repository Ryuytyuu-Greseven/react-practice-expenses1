import { useState } from "react";
import Card from "../UI/Cards/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, updateFilterYear] = useState("2019");
  const filterExpensesByYear = (event) => {
    console.log(event);
    updateFilterYear(event);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    const date = new Date(expense.date);
    return date.getFullYear().toString() === selectedYear;
  });

  let contentToDisplay = <p>No Expenses Found!</p>;

  if (filteredExpenses.length > 0) {
    contentToDisplay = filteredExpenses.map((singleExpense) => (
      <ExpenseItem key={singleExpense.id} expense={singleExpense}></ExpenseItem>
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        filterYear={selectedYear}
        filterExpenses={filterExpensesByYear}
      />
      {contentToDisplay}
    </Card>
  );
}

export default Expenses;
