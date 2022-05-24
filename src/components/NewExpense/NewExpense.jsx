import React, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

  const [isEditing, setisEditing] = useState(false)

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
    setisEditing(false)
  }

  const editingHandler= () => {
    isEditing ? setisEditing(false) : setisEditing(true)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={editingHandler}/>}
    </div>
  );
}

export default NewExpense;