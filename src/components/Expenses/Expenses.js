import Card from "../UI/Cards/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((singleExpense) => (
        <ExpenseItem expense={singleExpense}></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
