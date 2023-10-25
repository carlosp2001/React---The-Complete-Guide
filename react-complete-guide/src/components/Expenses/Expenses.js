import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items: expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Expenses.js");
    console.log(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className={"expenses"}>
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        {expensesContent}
        {/*Manera de hacerlo condicionales dentro del render*/}
        {/*{filteredExpenses.length === 0 && <p>No expenses found</p>}*/}
        {/*{filteredExpenses.length > 0 &&*/}
        {/*  filteredExpenses.map((expense) => (*/}
        {/*    <ExpenseItem*/}
        {/*      key={expense.id}*/}
        {/*      title={expense.title}*/}
        {/*      amount={expense.amount}*/}
        {/*      date={expense.date}*/}
        {/*    />*/}
        {/*  ))}*/}
      </Card>
    </div>
  );
};

export default Expenses;
