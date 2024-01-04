import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (val) => {
    if (val < totalExpenses) {
      alert("You cannot reduce the budget lower than the spending");
      val = totalExpenses;
    }

    dispatch({
      type: 'SET_BUDGET',
      payload: val,
    });
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}</span>
      <input type="number" step="10" value={budget} onChange={(event) => handleBudgetChange(event.target.value)}></input>
    </div>
  );
};

export default Budget;