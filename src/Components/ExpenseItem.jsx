// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <>
      <div className="Expense-item-main">
        <h3>Sep 13 2023</h3>
        <div className="Expense-item-details">
          <h2>Car Insurance</h2>
          <div className="Expense-item-price">$300</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
