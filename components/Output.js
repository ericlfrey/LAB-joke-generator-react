import React from 'react';
import PropTypes from 'prop-types';

export default function Output({ joke, btnText }) {
  return (
    <>
      {btnText === 'Get Another Joke'
        || btnText === 'Get Punchline'
        ? <h3>{joke.setup}</h3>
        : ''}
      {btnText === 'Get Another Joke'
        ? <h3>{joke.delivery}</h3>
        : ''}
    </>
  );
}

Output.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }),
  btnText: PropTypes.string,
};

Output.defaultProps = {
  joke: {},
  btnText: 'Get a Joke',
};
