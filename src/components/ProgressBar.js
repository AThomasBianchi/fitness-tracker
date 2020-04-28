import React from 'react';
import { connect } from 'react-redux';

const ProgressBar = ({ logged, goal }) => {
  let pct = ((parseInt(logged) / parseInt(goal)) * 100).toFixed(2);
  if (pct >= 100) pct = 100;
  const lineStyle = {
    width: pct + '%',
  }
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="percentage" style={lineStyle}></div>
      </div>
      <div className="progress-label">{logged}/{goal}</div>
    </div>
  );
};

const mapStateToProps = ({ logged, goal }) => {
  return {
    logged,
    goal
  }
}

export default connect(
  mapStateToProps,
  null,
)(ProgressBar);