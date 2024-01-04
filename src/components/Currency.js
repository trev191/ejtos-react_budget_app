import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });
  };

  return (
    <div className='alert alert-info'>
      <div className='row'>
        <div className='col-sm'>
          Currency
        </div>
        <div className='col-sm'>
          <select className='list-group' value={currency} name="Currency" id="Currency" onChange={(event) => changeCurrency(event.target.value)}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="₹">₹ Ruppee</option>
            <option value="€">€ Euro</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Currency;