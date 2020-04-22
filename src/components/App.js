import React, { useState } from 'react';
import MinutesInput from './MinutesInput';
import './App.css';

const App = () => {
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [goalMinutes, setGoalMinutes] = useState(150);

  const addInputToTotal = minutes => {
    minutes = parseInt(minutes);
    console.log(totalMinutes + minutes);
    setTotalMinutes(totalMinutes + minutes);
  };

  return (
    <div className="app">
      <MinutesInput handleSubmit={addInputToTotal} />
      {totalMinutes}/{goalMinutes}
      {/* Logged bar */}
      {/* Goal set */}
      {/* Start over */}
    </div>
  );
};

export default App;