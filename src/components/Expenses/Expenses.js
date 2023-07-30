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

  return (
    <Card className="expenses">
      <ExpenseFilter
        filterYear={selectedYear}
        filterExpenses={filterExpensesByYear}
      />
      {props.expenses.map((singleExpense) => (
        <ExpenseItem expense={singleExpense}></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
