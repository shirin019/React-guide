import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';

import './ExpensesList.css'

const ExpensesList = (props) => {
    let expensesContent = <p>No Expenses Found</p>;
    //   if(props.items.length > 0){
    //     expensesContent = props.items.length >0 && props.items.map((expense) =>
    //     (<ExpenseItem
    //       key={expense.id} //should bw unique for react to identify
    //       title={expense.title}
    //       amount={expense.amount}
    //       date={expense.date}></ExpenseItem>)
    //   )

    //   }
    if(props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found No Expenses!</h2>;
    }

    return (<ul className='expenses-list'>
        {props.items.map((expense) =>
        (<ExpenseItem
            key={expense.id} //should bw unique for react to identify
            title={expense.title}
            amount={expense.amount}
            date={expense.date}></ExpenseItem>)
        )}

    </ul>)
}

export default ExpensesList;