import React ,{useState}from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>
{
    const [enterTitle, setEnteredTitle]=useState('');
    const[enterAmount, setEnteredAmount]=useState('');
    const[enterDate, setEnteredDate]=useState('');
    // const[userInput, setUserInput]=useState(
    //     {
    //         enteredTitle:'',
    //         enteredAmount:'',
    //         enteredDate:'',
    //     }
    // )
    const titleChangeHandler=(event)=>
    {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        setEnteredTitle(event.target.value)
    }; 
    const amountChangeHandler=(event)=>
    {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
        setEnteredAmount(event.target.value)

    }; 
    const dateChangeHandler=(event)=>
    {
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        setEnteredDate(event.target.value)

    }; 
    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    
    return<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                value={enterTitle}
                 onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'
                value={enterAmount}
                 onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2018-01-01' max='2022-12-31' 
                value={enterDate}
                onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm