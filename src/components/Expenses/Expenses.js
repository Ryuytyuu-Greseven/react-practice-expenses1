import { useState } from "react";
import Card from "../UI/Cards/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpesesList/ExpenseList";

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

  return (
    <Card className="expenses">
      <ExpenseFilter
        filterYear={selectedYear}
        filterExpenses={filterExpensesByYear}
      />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
