import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [flag, setFlag] = useState(false);

    const flipFlag = () => {
        console.log(flag);
        setFlag(prevFlag => setFlag(!prevFlag));
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        flipFlag();
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            {flag ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} flipFlag={flipFlag} />
                : <button type='button' onClick={flipFlag}>Add New Expense</button>}

        </div>
    );
};

export default NewExpense;