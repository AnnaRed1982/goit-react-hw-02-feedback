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



// <div>
//   <button type="button" id="good" onClick={() => onLeaveFeedback('good')}>
//     Good
//   </button>
//   <button
//     type="button"
//     id="neutral"
//     onClick={() => onLeaveFeedback('neutral')}
//   >
//     Neutral
//   </button>
//   <button type="button" id="bad" onClick={() => onLeaveFeedback('bad')}>
//     Bad
//   </button>
// </div>
