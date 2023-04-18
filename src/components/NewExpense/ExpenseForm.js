import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const[enteredTitle,setEnteredTitle] = useState('');//'' since intially blank
    const[enteredAmount, setEnteredAmount] = useState('');// for onChange the value is always a string, even th num and date is as string 
    const[enteredDate, setEnteredDate] = useState(''); //can be multiple state and act independently

    // const [userInput, setUserInput] = useState({ //only one state instead of 3
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);        //event.target.value== value propert holds the current value of the input.
                                                         //this eveent is provided automatically when an event occurs
        //1----- setUserInput({
        //     ...userInput,//here when upadting a state we are dependent on previous state as using spread operator to not lose the datta so use below function
        //     enteredTitle: event.target.value,
        // })
        //2--- setUserInput((prevState)=>{ //previous state provided by react which is guranteed to provide latest state so donot lead to error
        //     return{...prevState,enteredTitle: event.target.value} //as state update is not done instantneously but scheduled
        // })
   
    }
    const amountChangeHandler = (event)=>{
       setEnteredAmount(event.target.value);
    //    setUserInput({
    //     ...userInput,//other two data don't get lost so using spread operator
    //     enteredAmount: event.target.value,
    //})
       
    }
    const dateChangeHandler = (event)=>{
       setEnteredDate(event.target.value) 
    //    setUserInput({
    //     ...userInput,//other two data don't get lost
    //     enteredDate: event.target.value,
    // })
    }

    const submitHandler = (event)=>{
        event.preventDefault();//when form submitted page is reloaded as res sent to server, a default vrowser beahviour so to prevent req sending.(a js beahaviour)
        
        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onsaveExpenseData(expenseData); // traversing from child to parent, available as enteredExpenseData in NewExpense component.

        setEnteredTitle(''); //this is (TWO WAY BINDING ) as we are using value attribute so value will be contained even though we set here blank
        setEnteredAmount('');//and as soon as we click button the i/p will not be shown and cleared but the value will be retained.
        setEnteredDate('');
    }


//when a button of typ submit is pressed, overall will emit and event which we can listen-submit event
   return(<form onSubmit={submitHandler}>
    <div className="new-expense__controls"> 
    <div className="new-expense__control" >
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
    </div>
    <div className="new-expense__control">
        <label >Amount</label>
        <input type="number" min=".01" step=".01" value={enteredAmount} onChange={amountChangeHandler}/>
    </div>
    <div className="new-expense__control">
        <label >Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
    </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
   </form>)
}

export default ExpenseForm;