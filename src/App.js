// import ExpenseItem from "./components/ExpenseItem";
import React ,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES=[
  {
    id:'e1',
    title:'life insurance',
    amount:94.12,
    date:new Date(2020, 7, 14),
  },
  {
    id:'e2',
    title:'car insurance',
    amount:94.12,
    date:new Date(2019, 7, 1),
  },
  {
    id:'e3',
    title:'vehicle insurance',
    amount:914.12,
    date:new Date(2021, 7, 24),
  },

];

function App() {
    const[expenses, setExpenses]=useState(DUMMY_EXPENSES)

  const addExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{
      return [expense, ...prevExpenses];
    })
  };
  return (
         <div>
            <NewExpense onAddExpense={addExpenseHandler}/> 
           <Expenses items={expenses}/>
         </div>
  );
}

export default App;
