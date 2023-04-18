import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import Card from '../UI/Card.js'
import ExpensesFilter from './ExpenseFilter.js';


function Expenses(props){
  const[filteredYear,setFilteredYear]=useState('2020');
  const filterChangeHandler=(selectedYear)=>{
     setFilteredYear(selectedYear);
  }
 return(
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      {
        props.items.map(expense=>
          <ExpenseItem title={expense.title}
          amount={expense.amount}
          date={expense.date}></ExpenseItem>)
      }
      
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
    </Card>
    </div>
 )
}
export default Expenses;