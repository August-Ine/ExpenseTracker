import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [expenses, setExpenses] = useState(props.items)

    const filterChangeHandler = (selectedYear) => {
        setExpenses(props.items.filter((expense) => {
            return expense.date.getFullYear().toString() === selectedYear;
        }));
    };

    return (
        <Card className="expenses">
            <ExpensesFilter onYearChanged={filterChangeHandler} />
            {expenses.length === 0 && <h2>No expenses found</h2>}
            <ExpensesChart expenses={expenses} />
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            ))}
        </Card>
    );
}

export default Expenses;