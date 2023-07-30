import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpense={props.addNewExpense}/>
    </div>
  );
};

export default NewExpense;
