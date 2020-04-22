import React, { useState } from 'react';

const MinutesInput = ({ handleSubmit }) => {
  const [minutes, setMinutes] = useState('');

  const submitForm = () => {
    if (minutes) {
      handleSubmit(minutes);
      setMinutes('');
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      submitForm();
    }}>
      <label htmlFor="minutes">minutes</label>
      <input
        name="minutes"
        type="number"
        value={minutes}
        onChange={
          (e) => { setMinutes(e.target.value) }
        } />
      <input type="submit" value="log it" />
    </form>
  );
};

export default MinutesInput;