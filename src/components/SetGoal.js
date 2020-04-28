import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeGoal } from '../actions';

const SetGoal = ({ currentGoal, changeGoal }) => {
  const [goal, setGoal] = useState(currentGoal);

  const handleGoalChange = (e) => {
    e.preventDefault();
    changeGoal(parseInt(goal));
  }

  return (
    <form
      className="set-goal"
      onSubmit={handleGoalChange}>
      <label className="goal-label" htmlFor="goal">goal:</label>
      <input
        className="goal-input"
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

const mapStateToProps = ({ goal }) => {
  return {
    currentGoal: goal
  }
}

export default connect(
  mapStateToProps,
  { changeGoal }
)(SetGoal);