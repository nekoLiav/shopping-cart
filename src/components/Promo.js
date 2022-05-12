/* eslint-disable react/prop-types */
import { useState } from 'react';

const Promo = (props) => {
  const [promo, setPromo] = useState('');

  const handlePromoChange = (e) => {
    setPromo(e.target.value);
    props.setPromoApplied(() => (e.target.value === 'NICE' ? true : false));
  };

  return (
    <input
      type='text'
      placeholder='Enter it here!'
      value={promo}
      onChange={handlePromoChange}
    ></input>
  );
};

export default Promo;
