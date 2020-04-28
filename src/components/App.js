import React from 'react';
import LogMinutes from './MinutesInput';
import ProgressBar from './ProgressBar';
import SetGoal from './SetGoal';
import ResetProgress from './ResetProgress';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <LogMinutes />
      <ProgressBar />
      <SetGoal />
      <ResetProgress />
    </div>
  );
};

export default App;