// ProgressBar.js
import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress mb-3">
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
