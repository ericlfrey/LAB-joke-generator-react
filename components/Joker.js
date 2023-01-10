import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import Output from './Output';

export default function Joker() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get a Joke');

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke(() => (
        { setup: obj.setup, delivery: obj.delivery }
      ));
    });
    setBtnText(() => 'Get Punchline');
  };
  const handlePunchline = () => {
    setBtnText(() => 'Get Another Joke');
  };
  return (
    <>
      <Button
        type="button"
        onClick={
          btnText === 'Get a Joke'
            || btnText === 'Get Another Joke'
            ? getAJoke
            : handlePunchline
        }
      >{btnText}
      </Button>
      <Output joke={joke} btnText={btnText} />
    </>
  );
}
