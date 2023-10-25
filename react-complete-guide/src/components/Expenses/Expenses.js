import { useState } from "react";

import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

  return (
    <div>
      <Card className={"expenses"}>
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesList items={filteredExpenses}/>
        {/*{expensesContent}*/}
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
