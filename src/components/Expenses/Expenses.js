import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import Card from '../UI/Card.js'
import ExpensesFilter from './ExpenseFilter.js';



function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');//fileterdYear is string

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = <p>No Expenses Found</p>;
  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.length >0 && filteredExpenses.map((expense) =>
    (<ExpenseItem
      key={expense.id} //should bw unique for react to identify
      title={expense.title}
      amount={expense.amount}
      date={expense.date}></ExpenseItem>)
  )

  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        {expensesContent}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found</p>
        ) : (
          filteredExpenses.map((expense) =>
            (<ExpenseItem
              key={expense.id} //should bw unique for react to identify
              title={expense.title}
              amount={expense.amount}
              date={expense.date}></ExpenseItem>)
          )
        )
        }--------------------------- */}
        {/* { filteredExpenses.length === 0 && <p>No Expenses Found</p> }
        {filteredExpenses.length >0 && filteredExpenses.map((expense) =>
            (<ExpenseItem
              key={expense.id} //should bw unique for react to identify
              title={expense.title}
              amount={expense.amount}
              date={expense.date}></ExpenseItem>)
          )} */}
         

     </Card>
    </div>
  )
}
export default Expenses;
















//-------------------------------------
 {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
       ></ExpenseItem> */}