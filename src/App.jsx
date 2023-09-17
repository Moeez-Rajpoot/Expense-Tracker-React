// import ExpenseItem from "./Components/ExpenseItem";
// import Card from './Components/Card'
import KeyCon from './Components/KeyConcepts/KeyConcept'
import './App.css'
function App() {

  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  return (
    <>
    {/* <h1>Expense List</h1>
 <Card>
 {expenses.map((expense) =>(
      <ExpenseItem key={expense.id} expense={expense}/>
     ))}
 </Card> */}


  <KeyCon/>
    
    </>
  );
}

export default App;
