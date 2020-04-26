import React, { useState } from 'react';

const SetGoal = ({ currentGoal, changeGoal }) => {
  const [goal, setGoal] = useState(currentGoal);

  const handleGoalChange = (e) => {
    e.preventDefault();
    changeGoal(goal);
  }

  return (
    <form
      className="set-goal"
      onSubmit={handleGoalChange}>
      <label htmlFor="goal">goal</label>
      <input
        name="goal"
        value={goal}
        onChange={(e) => {
          setGoal(e.target.value)
        }}
      />
      <input
        className="button"
        type="submit"
        value="enter"
      />
    </form>
  );
};

export default SetGoal;