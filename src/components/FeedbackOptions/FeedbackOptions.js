import PropTypes from "prop-types";

export function FeedbackOptions({
  handleIncrementGood,
  handleIncrementNeutral,
  handleIncrementBad,
}) {
  return (
    <div>
      <button type="button" onClick={handleIncrementGood}>
        Good
      </button>
      <button type="button" onClick={handleIncrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={handleIncrementBad}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleIncrementGood: PropTypes.func,
  handleIncrementNeutral: PropTypes.func,
  handleIncrementBad: PropTypes.func,
};
