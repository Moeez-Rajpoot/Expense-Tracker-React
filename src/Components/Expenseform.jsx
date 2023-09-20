import { useState } from "react";
import "./Expenseform.css";
function Expenseform() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [date, setdate] = useState("");

  function TitleChangeHandler(event) {
    settitle(event.target.value);
  }

  function PriceChangeHandler(event) {
    setprice(event.target.value);
  }

  function DateChangeHandler(event) {
    setdate(event.target.value);
  }

  return (
    <>
      <form className="form-main">
        <div className="title-field">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title Here"
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="price-field">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Enter Price Here"
            onChange={PriceChangeHandler}
          />
        </div>
        <div className="date-field">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-31-12"
            onChange={DateChangeHandler}
          />
        </div>

        <button className="button-field" type="submit">
          Add Expense
        </button>
      </form>
    </>
  );
}

export default Expenseform;
