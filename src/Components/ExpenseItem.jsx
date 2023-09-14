// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ExpenseItem.css";
import PropTypes from "prop-types";

function ExpenseItem(props) {
  const month = props.expense.date.toLocaleString("en-US", { month: "long" });
  const day = props.expense.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expense.date.getFullYear();
  const price = props.expense.amount;
  const title = props.expense.title;

  return (
    <>
      <div className="Expense-item-main">
        <div className="Expense-item-date">
          <h3>{month}</h3>
          <h3>{day}</h3>
          <h3>{year}</h3>
        </div>
        <div className="Expense-item-details">
          <h2>{title}</h2>
          <div className="Expense-item-price">${price}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    amount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
