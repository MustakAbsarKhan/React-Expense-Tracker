import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <div>
            <h2>{props.expenseTitle}</h2>
          </div>
          <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
