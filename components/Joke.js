//

// import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import getJoke from '../api/jokeData';

export default function Joke() {
  // const [joke, setJoke] = useState({});
  // const [showSetup, setShowSetup] = useState(false);
  // const [showDelivery, setShowDelivery] = useState(false);
  // const [showReset, setShowReset] = useState(false);

  // const handleFetchJoke = () => {
  //   getJoke().then((obj) => {
  //     setJoke(() => (
  //       { setup: obj.setup, delivery: obj.delivery }
  //     ));
  //   });
  // setShowSetup(() => !showSetup);
  // };
  // const handleDelivery = () => {
  // setShowDelivery(() => !showDelivery);
  // setShowReset(() => !showReset);
  // };
  // const handleReset = () => {
  //   // setShowSetup(() => !showSetup);
  //   // setShowDelivery(() => !showDelivery);
  //   // setShowReset(() => !showReset);
  // };

  return (
    <div>
      {/* {showSetup ? '' : <button type="button" onClick={handleFetchJoke}>Get a Joke</button>}
      {showSetup && !showDelivery ? <button type="button" onClick={handleDelivery}>Get Punchline</button> : ''}
      {showSetup && <h3>{joke.setup}</h3>}
      {showDelivery && <h3>{joke.delivery}</h3>}
      {showReset && <button type="button" onClick={handleReset}>Get Another Joke</button>} */}
      <Button type="button" value="Butt" />
    </div>
  );
}
