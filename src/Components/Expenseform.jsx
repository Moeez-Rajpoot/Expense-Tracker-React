import { useState } from "react";
import "./Expenseform.css";
import PropTypes from 'prop-types'

function Expenseform(props) {
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

  function SubmitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: title,
      price: parseInt(price),
      date: new Date(date),
    };
    console.log(expenseData);
    props.OnSavaData(expenseData);
    settitle("");
    setprice("");
    setdate("");
  }

  return (
    <>
      <form onSubmit={SubmitHandler} className="form-main">
        <div className="title-field">
          <label>Title</label>
          <input
            value={title}
            required={true}
            type="text"
            placeholder="Enter Title Here"
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="price-field">
          <label>Price</label>
          <input
            value={price}
            required={true}
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
            value={date}
            required={true}
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

Expenseform.propTypes = {
  OnSavaData: PropTypes.func.isRequired,
};


export default Expenseform;
