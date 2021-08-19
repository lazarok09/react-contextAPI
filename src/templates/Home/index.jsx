import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../context/CounterContext';
export const Home = () => {
  // use the hook created in index by CounterContext context
  const [state, actions] = useCounterContext();
  // if we console log state the counter value will start with zero.
  // console.log(actions);
  // console.debug(state);
  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.message + ' : ' + e.name));
  };
  return (
    <div>
      <Heading />
      <Button text="INCREASE" onButtonClick={actions.increase} />
      <Button text="DECREASE" onButtonClick={actions.decrease} />
      <Button text="RESET" onButtonClick={actions.reset} />
      <Button
        text="COUNTER + 10"
        onButtonClick={() => actions.setCounter({ counter: 10 })}
      />
      <Button
        disabled={state.loading}
        text="Async Increase"
        onButtonClick={actions.asyncIncrease}
      />
      <Button
        disabled={state.loading}
        text="Async Error"
        onButtonClick={handleError}
      />
    </div>
  );
};
