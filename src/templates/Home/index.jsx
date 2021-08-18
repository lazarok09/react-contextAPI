import React, { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../../context/CounterContext/context';
export const Home = () => {
  const [state, actions] = useContext(CounterContext);

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return <h1 onClick={() => actions.increase()}>Hello Home</h1>;
};
