import './Expenseform.css';
function Expenseform() {
  return (
    <>

        <form className="form-main">
            <div className="title-field">
                <label>Title</label>
                <input type="text" placeholder='Enter Title Here'/>
            </div>
            <div className="price-field">
                <label>Price</label>
                <input type="number" min="0.01" step="0.01" placeholder='Enter Price Here' />
            </div>
            <div className="date-field">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-31-12"/>
            </div>
            
                <button className='button-field' type="submit">Add Expense</button>
    
        </form>




      
    </>
  )
}

export default Expenseform
