import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
	const [filterYear, setFilterYear] = useState("2022");

	const filterChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredExpenses = props.expenseArray.filter(
		(item) => item.date.getFullYear().toString() === filterYear
	);

	return (
			<Card className="expenses">
				<ExpensesFilter
					selected={filterYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
	);
}

export default Expenses;
