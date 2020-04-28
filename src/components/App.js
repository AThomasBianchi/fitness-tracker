import React, { useState } from 'react';
import LogMinutes from './MinutesInput';
import ProgressBar from './ProgressBar';
import SetGoal from './SetGoal';
import './App.css';

const App = () => {
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [goalMinutes, setGoalMinutes] = useState(150);

  const changeGoal = minutes => {
    minutes = parseInt(minutes);
    setGoalMinutes(minutes);
  }
  return (
    <div className="app">
      <LogMinutes />
      <ProgressBar
        minutes={totalMinutes}
        goal={goalMinutes}
      />
      <SetGoal
        currentGoal={goalMinutes}
        changeGoal={changeGoal}
      />
      <div
        onClick={() => {
          setTotalMinutes(0);
        }}
      >Start over
      <i className="fas fa-sync-alt"></i>
      </div>
    </div>
  );
};

export default App;