import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  
  return (
    <div>
      {keys.map(key => {
        return (
          <button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func,
}


