import React from 'react';
import { connect } from 'react-redux';

const ProgressBar = ({ minutes, goal }) => {
  let pct = ((parseInt(minutes) / parseInt(goal)) * 100).toFixed(2);
  if (pct >= 100) pct = 100;
  const lineStyle = {
    width: pct + '%',
  }
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="percentage" style={lineStyle}></div>
      </div>
      <div>{minutes}/{goal}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
}


export default connect(
  mapStateToProps,
  null,
)(ProgressBar);