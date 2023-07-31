import ExpenseItem from "../ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((singleExpense) => (
        <ExpenseItem
          key={singleExpense.id}
          expense={singleExpense}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenseList;
