import React, { useState } from 'react';

const LogMinutes = ({ handleSubmit }) => {
  const [minutes, setMinutes] = useState('');

  const submitForm = () => {
    if (minutes) {
      handleSubmit(minutes);
      setMinutes('');
    }
  };

  return (
    <form
      className="log-minutes"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}>
      <label
        className="minutes-label" htmlFor="minutes">minutes</label>
      <input
        className="minutes-input"
        name="minutes"
        type="number"
        value={minutes}
        onChange={
          (e) => { setMinutes(e.target.value) }
        } />
      <input className="button" type="submit" value="log it!" />
    </form>
  );
};

export default LogMinutes;