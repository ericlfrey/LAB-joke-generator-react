import React from 'react';
import PropTypes from 'prop-types';

export default function Output({ joke, btnText }) {
  return (
    <>
      {btnText === 'Get Another Joke'
        || btnText === 'Get Punchline'
        ? <h6>{joke.setup}</h6>
        : ''}
      {btnText === 'Get Another Joke'
        ? <h6>{joke.delivery}</h6>
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
