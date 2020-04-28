import React from 'react';
import { connect } from 'react-redux';
import { resetProgress } from '../actions';

const ResetProgress = ({ resetProgress }) => {
  return (
    <div
      onClick={() => {
        resetProgress();
      }}
    >Start over
      <i className="fas fa-sync-alt"></i>
    </div>
  );
}

export default connect(
  null,
  { resetProgress }
)(ResetProgress);