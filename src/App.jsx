import ExpenseItem from "./Components/ExpenseItem";
import Card from "./Components/Card";
import KeyCon from "./Components/KeyConcepts/KeyConcept";
import "./App.css";
import Expenseform from "./Components/Expenseform";
import { useState } from "react";
import ExpenseFilter from "./Components/ExpenseFilter";

const Dummy_data = [
  {
    id: "e1",
    title: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", 
  title: "New TV", 
  price: 799.49, 
  date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    price: 450,
    date: new Date(2021, 5, 12),
  },
];




function App() {
  const [expenses , setexpenses] = useState(Dummy_data);
  const Displaydata = (result) => {
    const expenseData = {
      ...result,
      id: Math.random().toString()
    };
  
    console.log(expenseData);
    setexpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };
  return (
    <>
      <Expenseform OnSavaData={Displaydata} />
      <Card>
        <ExpenseFilter/>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>

      {/* <KeyCon/> */}
    </>
  );
}

export default App;
